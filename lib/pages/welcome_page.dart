import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:get/get.dart';
import 'package:suilove/common/layout.dart';
import 'package:suilove/common/svg.dart';
import 'package:suilove/pages/landing_page.dart';
import 'package:swipe_cards/draggable_card.dart';
import 'package:swipe_cards/swipe_cards.dart';
import 'package:url_launcher/url_launcher_string.dart';
import '../controller/global_theme_controller.dart';

class WelcomePage extends StatefulWidget {
  const WelcomePage({Key? key}) : super(key: key);

  @override
  _WelcomePageState createState() => _WelcomePageState();
}

class _WelcomePageState extends State<WelcomePage> {
  MatchEngine _matchEngine = MatchEngine(swipeItems: []);
  List<SwipeItem> _swipeItems = <SwipeItem>[];

  List<UserCardData> preLoad = [
    UserCardData(
        hobby: 'travel',
        name: 'Alex',
        age: '22',
        location: 'JP',
        img:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fm00%2F6f%2Ff2%2Ff4b40bbe4839d68fb868849a3b15b3dd.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670249526&t=835defa233b02273e015f4c3a0085de0',
        star: false),
    UserCardData(
        hobby: 'read',
        name: 'Fay',
        age: '22',
        location: 'JP',
        img:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F795f5fa7ce5e194e0adf1e6af208d220ff29bfb8.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670249526&t=f500e0f8cef794d317717397532e723c',
        star: true),
    UserCardData(
        hobby: 'ride',
        name: 'Fair',
        age: '22',
        location: 'JP',
        img:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F1110200Z938%2F2011100Z938-2-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670249526&t=45a14d5c42ebf1adbff2405205fa70c2',
        star: false),
    UserCardData(
        hobby: 'all',
        name: 'Alice',
        age: '22',
        location: 'JP',
        img:
            'https://pics5.baidu.com/feed/0b55b319ebc4b7458cd9fad9075df01f888215de.jpeg?token=ccf0d4ee285578a3b44f251836e956ef',
        star: true),
    UserCardData(
        hobby: 'dance',
        name: 'Sara',
        age: '22',
        location: 'JP',
        img:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2Fsj01%2F20121R10U14154-0-lp.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670249526&t=e7cbfeee00033ea67cf7cb72bc4bf6b3',
        star: false),
    UserCardData(
        hobby: 'play',
        name: 'Eva',
        age: '22',
        location: 'JP',
        img:
            'https://img2.baidu.com/it/u=2490939159,251868101&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=750',
        star: false),
    UserCardData(
        hobby: 'other',
        name: 'Angel',
        age: '22',
        location: 'JP',
        img:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F2%2F19%2Fcd979c8c90.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670249526&t=f50c030aff665058e6200acf15b93753',
        star: false)
  ];

  @override
  void initState() {
    _initMatchEngine();
    super.initState();
  }

  _initMatchEngine() {
    for (int i = 0; i < preLoad.length; i++) {
      _swipeItems.add(SwipeItem(
          content: preLoad[i],
          likeAction: () {},
          nopeAction: () {},
          superlikeAction: () {},
          onSlideUpdate: (SlideRegion? region) async {}));
    }
    _matchEngine = MatchEngine(swipeItems: _swipeItems);
  }

  _updateSwipeItems() {
    for (int i = 0; i < preLoad.length; i++) {
      _swipeItems.add(SwipeItem(
          content: preLoad[i],
          likeAction: () {},
          nopeAction: () {},
          superlikeAction: () {},
          onSlideUpdate: (SlideRegion? region) async {}));
    }
  }

  @override
  Widget build(BuildContext context) {
    GlobalThemeController theme = Get.find();

    final _buildButton = (
        {onPressed,
        required String text,
        required SvgPicture icon,
        required Color color,
        double padding = 10.0,
        bool revert = false}) {
      return ElevatedButton(
          style: ButtonStyle(
              shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                  RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(16.0),
              )),
              foregroundColor: MaterialStateProperty.all(color),
              elevation: MaterialStateProperty.all(0),
              side:
                  MaterialStateProperty.all(BorderSide(width: 1, color: color)),
              backgroundColor: MaterialStateProperty.all(Colors.white)),
          onPressed: () {
            onPressed?.call();
          },
          child: Padding(
            padding: EdgeInsets.symmetric(vertical: padding),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: revert
                  ? [
                      Text(
                        text,
                        style: TextStyle(color: color, fontSize: 16),
                      ),
                      buildRowGap(12.0),
                      icon,
                    ]
                  : [
                      icon,
                      buildRowGap(12.0),
                      Text(
                        text,
                        style: TextStyle(color: color, fontSize: 16),
                      ),
                    ],
            ),
          ));
    };

    return Scaffold(
        backgroundColor: theme.backgroundColor1,
        appBar: AppBar(
          backgroundColor: theme.backgroundColor1,
          elevation: 0,
          title: Center(
            child: svgLogoL(),
          ),
        ),
        body: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 28),
          child: Column(
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Flexible(
                    child: _buildButton(
                        color: Color(0xFF54ACEE),
                        text: 'Twitter',
                        onPressed: () {
                          launchUrlString("https://twitter.com/suii_driveweb3");
                        },
                        icon: svgTwitter(height: 24, width: 24)),
                  ),
                  buildRowGap(30.0),
                  Flexible(
                    child: _buildButton(
                        color: Color(0xFF738BD8),
                        text: 'Discord',
                        onPressed: () {
                          launchUrlString("https://twitter.com/suii_driveweb3");
                        },
                        icon: svgDiscord(height: 24, width: 24)),
                  )
                ],
              ),
              buildColumnGap(20.0),
              Expanded(
                child: SwipeCards(
                    matchEngine: _matchEngine,
                    upSwipeAllowed: false,
                    fillSpace: false,
                    onStackFinished: () {
                      // _updateSwipeItems();
                    },
                    itemChanged: (SwipeItem item, int index) {
                      print(index);
                      if (index == _swipeItems.length - 2) {
                        _updateSwipeItems();
                      }
                    },
                    itemBuilder: (BuildContext context, int index) {
                      return UserCard(
                          theme: theme,
                          userCardData: _swipeItems[index].content);
                    }),
              ),
              buildColumnGap(20.0),
              _buildButton(
                  color: Color(0xFFFF9877),
                  text: 'Start use',
                  onPressed: () {
                    Get.to(const LandingPage());
                  },
                  revert: true,
                  padding: 20.0,
                  icon: svgStar()),
              buildColumnGap(20.0),
            ],
          ),
        ));
  }
}

class UserCardData {
  UserCardData(
      {required this.name,
      required this.age,
      required this.location,
      required this.img,
      required this.star,
      required this.hobby});
  String name;
  String age;
  String location;
  String img;
  bool star;
  String hobby;
}
