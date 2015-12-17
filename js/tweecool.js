/*Name : TweeCool
 *version: 1.9 
 *Description: Get the latest tweets from twitter.
 *Website: www.tweecool.com
 *Licence: No licence, feel free to do whatever you want.
 *Author: TweeCool
 */
(function($) {
	$.fn.extend({

		tweecool : function(options) {

			var defaults = {
				username : 'tweecool',
				limit : 5,
				profile_image : true,
				show_time : true,
				show_media : false,
                                show_media_size: 'medium',  //values: small, large, thumb, medium 
                                show_actions: false,
                                action_reply_icon: '<span class="fa fa-reply"></span>', //'&crarr;',
                                action_retweet_icon: '<span class="fa fa-retweet"></span>', //'&prop;',
                                action_favorite_icon: '<span class="fa fa-heart"></span>', //'&#10084',
                                profile_img_url: 'profile', //Values: profile, tweet 
                                show_retweeted_text: false //This will show the original tweet in order to avoid any truncated text, and also the "RT @tweecool:" is removed which helps with 140 character limit
                                
			}

			var options = $.extend(defaults, options);

			function xTimeAgo(time) {
				var nd = new Date();
				//var gmtDate = Date.UTC(nd.getFullYear(), nd.getMonth(), nd.getDate(), nd.getHours(), nd.getMinutes(), nd.getMilliseconds());
				var gmtDate = Date.parse(nd);
				var tweetedTime = time * 1000; //convert seconds to milliseconds
				var timeDiff = (gmtDate - tweetedTime) / 1000; //convert milliseconds to seconds
				
				var second = 1, minute = 60, hour = 60 * 60, day = 60 * 60 * 24, week = 60 * 60 * 24 * 7, month = 60 * 60 * 24 * 30, year = 60 * 60 * 24 * 365;
                                
				if (timeDiff > second && timeDiff < minute) {
                                    return Math.round(timeDiff / second) + " second"+(Math.round(timeDiff / second) > 1?'s':'')+" ago";
				} else if (timeDiff >= minute && timeDiff < hour) {
					return Math.round(timeDiff / minute) + " minute"+(Math.round(timeDiff / minute) > 1?'s':'')+" ago";
				} else if (timeDiff >= hour && timeDiff < day) {
					return Math.round(timeDiff / hour) + " hour"+(Math.round(timeDiff / hour) > 1?'s':'' )+" ago";
				} else if (timeDiff >= day && timeDiff < week) {
					return Math.round(timeDiff / day) + " day"+(Math.round(timeDiff / day) > 1 ?'s':'')+" ago";
				} else if (timeDiff >= week && timeDiff < month) {
					return Math.round(timeDiff / week) + " week"+(Math.round(timeDiff / week) > 1?'s':'')+" ago";
				} else if (timeDiff >= month && timeDiff < year) {
					return Math.round(timeDiff / month) + " month"+(Math.round(timeDiff / month) > 1 ?'s':'')+" ago";
				} else {
					return 'over a year ago';
				}
			}

			return this.each(function() {
				var o = options;
				var wrapper = $(this);
				var wInner = $('<ul>').appendTo(wrapper);
				var urlpattern = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
				var usernamepattern = /@+(\w+)/ig;
				var hashpattern = /#+(\w+)/ig;
                                var pIMG, media, timestamp, abox, mtext;

				$.getJSON("https://www.api.tweecool.com/?screenname=" + o.username + "&count=" + o.limit, function(data) {

					if (data.errors || data == null) {
						wrapper.html('<p class="text-center">No tweets available.</p>');
						return false;
					}

					$.each(data.tweets, function(i, field) {
                                            
                                                if (o.profile_image) {
                                                    if( o.profile_img_url == 'tweet' ){
                                                        pIMG = '<a href="https://twitter.com/' + o.username + '/status/'+field.id_str+'" target="_blank"><img src="' + data.user.profile_image_url + '" alt="' + o.username + '" /></a>';
                                                    }else{
                                                        pIMG = '<a href="https://twitter.com/' + o.username + '" target="_blank"><img src="' + data.user.profile_image_url + '" alt="' + o.username + '" /></a>';
                                                    }
                                                }else{
                                                    pIMG = ''; 
                                                }

						if (o.show_time) {
						    timestamp = xTimeAgo(field.timestamp);
						}else{
                                                    timestamp = ''; 
                                                }
                                                
                                                if(o.show_media && field.media_url){
                                                   media = '<br><a href="https://twitter.com/' + o.username + '/status/'+field.id_str+'" target="_blank"><img class="blog__post-media" src="' + field.media_url + ':'+o.show_media_size+'" alt="' + o.username + '" /></a>';
                                                }else{
                                                   media = ''; 
                                                }
                                                
                                                if( o.show_actions ){
                                                   abox = '<span class="blog__post-action pull-right clearfix">';
                                                   abox += '<span class="ab_reply"><a title="Reply" href="https://twitter.com/intent/tweet?in_reply_to='+field.id_str+'">'+o.action_reply_icon+'</a></span>&emsp;';
                                                   abox += '<span class="ab_retweet"><a title="Retweet" href="https://twitter.com/intent/retweet?tweet_id='+field.id_str+'">'+o.action_retweet_icon+'</a>'+( field.retweet_count_f != '' ?'&nbsp;<span>'+field.retweet_count_f+'</span>':'' )+'</span>&emsp;';
                                                   abox += '<span class="ab_favorite"><a title="Favorite" href="https://twitter.com/intent/favorite?tweet_id='+field.id_str+'">'+o.action_favorite_icon+'</a>'+( field.favorite_count_f != '' ?'&nbsp;<span>'+field.favorite_count_f+'</span>':'' )+'</span>';
                                                   abox += '</span>';
                                                }else{
                                                  abox = '';  
                                                }
                                                
                                                if( o.show_retweeted_text && field.retweeted_text ){
                                                   mtext = field.retweeted_text;  
                                                }else{
                                                   mtext =  field.text;
                                                }
                                                
						wInner.append('<li>' + pIMG + '<div class="blog__post clearfix"><div class="tweets_txt">' + mtext.replace(urlpattern, '<a href="$1" target="_blank">$1</a>').replace(usernamepattern, '<a href="https://twitter.com/$1" target="_blank">@$1</a>').replace(hashpattern, '<a href="https://twitter.com/search?q=%23$1" target="_blank">#$1</a>') + media + '<div class="blog__post-source"><span class="fa fa-twitter"></span> Tweeted by <a href="https://twitter.com/DebashisBarman">@DebashisBarman</a></div><div class="blog__post-footer"><span class="blog__post-time pull-left clearfix">' + timestamp + '</span>'+abox+'</div></div></div></li>');
					});

				}).fail(function(jqxhr, textStatus, error) {
					//var err = textStatus + ', ' + error;
					wrapper.html('<p class="text-center">No tweets available.</p>');
				});

			});

		}
	});

})(jQuery); 
