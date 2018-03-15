/*
MySQL Data Transfer
Source Host: 120.79.166.231
Source Database: mrtt_zxt
Target Host: 120.79.166.231
Target Database: mrtt_zxt
Date: 2018/3/14 17:40:34
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `admin_id` int(10) NOT NULL COMMENT '管理员id',
  `admin_name` varchar(255) NOT NULL COMMENT '管理员姓名',
  `admin_password` varchar(255) NOT NULL COMMENT '管理员密码',
  `admin_telephone` char(11) DEFAULT NULL COMMENT '管理员电话',
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for collection
-- ----------------------------
DROP TABLE IF EXISTS `collection`;
CREATE TABLE `collection` (
  `collection_id` int(10) NOT NULL COMMENT '收藏id',
  `user_id` int(10) NOT NULL COMMENT '用户id',
  `news_id` int(10) NOT NULL COMMENT '新闻id',
  PRIMARY KEY (`collection_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `comment_id` int(10) NOT NULL COMMENT '论评id',
  `user_id` int(10) NOT NULL COMMENT '用户id',
  `news_id` int(11) NOT NULL COMMENT '新闻id',
  `comment_content` varchar(200) NOT NULL COMMENT '评论内容',
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for download
-- ----------------------------
DROP TABLE IF EXISTS `download`;
CREATE TABLE `download` (
  `download_id` int(10) NOT NULL COMMENT '下载新闻id',
  `user_id` int(10) NOT NULL COMMENT '用户id',
  `news_id` int(10) NOT NULL COMMENT '新闻id',
  PRIMARY KEY (`download_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for feedback_information_public
-- ----------------------------
DROP TABLE IF EXISTS `feedback_information_public`;
CREATE TABLE `feedback_information_public` (
  `feedback_information_public_id` int(10) NOT NULL COMMENT '公众号提反馈意见的编号',
  `public_id` int(10) NOT NULL COMMENT '公众号id',
  `content` varchar(100) NOT NULL COMMENT '公众号提的反馈意见的内容',
  PRIMARY KEY (`feedback_information_public_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for feedback_information_user
-- ----------------------------
DROP TABLE IF EXISTS `feedback_information_user`;
CREATE TABLE `feedback_information_user` (
  `feedback_information_user_id` int(10) NOT NULL COMMENT '用户提反馈意见的id',
  `user_id` int(10) NOT NULL COMMENT '用户id',
  `content` varchar(100) NOT NULL COMMENT '用户提反馈意见的内容',
  PRIMARY KEY (`feedback_information_user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for great
-- ----------------------------
DROP TABLE IF EXISTS `great`;
CREATE TABLE `great` (
  `great_id` int(100) NOT NULL COMMENT '新闻点赞id',
  `user_id` int(10) NOT NULL COMMENT '用户id',
  `news_id` int(10) NOT NULL COMMENT '新闻id',
  PRIMARY KEY (`great_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `news_id` int(100) NOT NULL COMMENT '新闻id',
  `news_title` varchar(50) NOT NULL COMMENT '新闻标题',
  `news_content` varchar(500) NOT NULL COMMENT '新闻内容',
  `news_time` datetime NOT NULL COMMENT '新闻发布时间',
  `picture_id` int(10) DEFAULT NULL COMMENT '新闻中所用图片id',
  `video_id` int(10) DEFAULT NULL COMMENT '新闻中所用视频id',
  `public_id` int(10) NOT NULL COMMENT '布发新闻的公众号id',
  `great_count` int(10) NOT NULL COMMENT '新闻被点赞次数统计',
  `comment_count` int(10) NOT NULL COMMENT '新闻被评论次数统计',
  `share_count` int(10) NOT NULL COMMENT '新闻被分享次数统计',
  `collection_count` int(10) NOT NULL COMMENT '新闻被收藏次数统计',
  `download_count` int(10) NOT NULL COMMENT '新闻被下载次数统计',
  `shield_count` int(10) NOT NULL COMMENT '新闻被屏蔽次数统计',
  `report_count` int(10) NOT NULL COMMENT '新闻被举报次数统计',
  PRIMARY KEY (`news_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for picture
-- ----------------------------
DROP TABLE IF EXISTS `picture`;
CREATE TABLE `picture` (
  `picture_id` int(10) NOT NULL COMMENT '图片id',
  `picture_name` varchar(50) NOT NULL COMMENT '图片名称',
  PRIMARY KEY (`picture_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for public
-- ----------------------------
DROP TABLE IF EXISTS `public`;
CREATE TABLE `public` (
  `public_id` int(10) NOT NULL COMMENT '公众号id',
  `public_name` varchar(255) NOT NULL COMMENT '公众号名称',
  `public_password` varchar(255) NOT NULL COMMENT '公众号密码',
  `public_telephone` char(11) DEFAULT NULL COMMENT '公众号电话',
  PRIMARY KEY (`public_id`),
  KEY `public_name` (`public_name`,`public_password`,`public_telephone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for read_news
-- ----------------------------
DROP TABLE IF EXISTS `read_news`;
CREATE TABLE `read_news` (
  `read_news_id` int(10) NOT NULL COMMENT '记录用户阅读历史的编号',
  `user_id` int(10) NOT NULL COMMENT '用户id',
  `news_id` int(10) NOT NULL COMMENT '新闻id',
  PRIMARY KEY (`read_news_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for regular_remind
-- ----------------------------
DROP TABLE IF EXISTS `regular_remind`;
CREATE TABLE `regular_remind` (
  `regular_remind_id` int(10) NOT NULL COMMENT '定时提醒id',
  `user_id` int(10) NOT NULL COMMENT '用户id',
  `time` varchar(255) NOT NULL DEFAULT '7点' COMMENT '用户设置定时提醒时间',
  PRIMARY KEY (`regular_remind_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for remind_later
-- ----------------------------
DROP TABLE IF EXISTS `remind_later`;
CREATE TABLE `remind_later` (
  `remind_later_id` int(10) NOT NULL COMMENT '稍后提醒id',
  `user_id` int(10) NOT NULL COMMENT '用户id',
  `time` varchar(255) NOT NULL DEFAULT '1å°æ—¶' COMMENT '稍后提醒时间',
  PRIMARY KEY (`remind_later_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for report
-- ----------------------------
DROP TABLE IF EXISTS `report`;
CREATE TABLE `report` (
  `report_id` int(10) NOT NULL COMMENT '举报id',
  `user_id` int(10) NOT NULL COMMENT '用户id',
  `news_id` int(10) NOT NULL COMMENT '新闻id',
  PRIMARY KEY (`report_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for see_later
-- ----------------------------
DROP TABLE IF EXISTS `see_later`;
CREATE TABLE `see_later` (
  `see_later_id` int(10) NOT NULL COMMENT '用户保存稍后再看新闻的id',
  `user_id` int(10) NOT NULL COMMENT '用户id',
  `news_id1` int(10) DEFAULT NULL COMMENT '用户稍后要看的第1个新闻的id',
  `news_id2` int(10) DEFAULT NULL COMMENT '用户稍后要看的第2个新闻的id',
  `news_id3` int(10) DEFAULT NULL COMMENT '用户稍后要看的第3个新闻的id',
  `news_id4` int(10) DEFAULT NULL COMMENT '用户稍后要看的第4个新闻的id',
  `news_id5` int(10) DEFAULT NULL COMMENT '用户稍后要看的第5个新闻的id',
  PRIMARY KEY (`see_later_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for share
-- ----------------------------
DROP TABLE IF EXISTS `share`;
CREATE TABLE `share` (
  `share_id` int(10) NOT NULL COMMENT '分享id',
  `user_id` int(10) NOT NULL COMMENT '用户id',
  `news_id` int(10) NOT NULL COMMENT '新闻id',
  `share_place` bit(1) NOT NULL COMMENT '0表示分享到微信朋友圈、1表示分享到QQ朋友圈',
  PRIMARY KEY (`share_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for shield
-- ----------------------------
DROP TABLE IF EXISTS `shield`;
CREATE TABLE `shield` (
  `shield_id` int(10) NOT NULL COMMENT '屏蔽id',
  `user_id` int(10) NOT NULL COMMENT '用户id',
  `news_id` int(10) NOT NULL COMMENT '新闻id',
  PRIMARY KEY (`shield_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for subscribe_public
-- ----------------------------
DROP TABLE IF EXISTS `subscribe_public`;
CREATE TABLE `subscribe_public` (
  `subscribe_public_id` int(10) NOT NULL COMMENT '用户订阅公众号的id',
  `user_id` int(10) NOT NULL COMMENT '用户id',
  `public_id` int(10) NOT NULL COMMENT '公众号id',
  PRIMARY KEY (`subscribe_public_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(10) NOT NULL COMMENT '用户id',
  `user_name` varchar(255) NOT NULL COMMENT '用户姓名',
  `user_password` varchar(255) NOT NULL COMMENT '用户密码',
  `user_telephone` char(11) DEFAULT NULL COMMENT '用户电话',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for video
-- ----------------------------
DROP TABLE IF EXISTS `video`;
CREATE TABLE `video` (
  `video_id` int(10) NOT NULL COMMENT '频视id',
  `video_name` varchar(50) NOT NULL COMMENT '视频名称',
  PRIMARY KEY (`video_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records 
-- ----------------------------
