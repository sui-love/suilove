import 'package:flutter/material.dart';
import 'package:suilove/common/svg.dart';
import '../controller/global_theme_controller.dart';
import '../pages/welcome_page.dart';

buildColumnGap(height) {
  return Container(height: height);
}

buildRowGap(width) {
  return Container(width: width);
}

class ListItem extends StatelessWidget {
  const ListItem(
      {Key? key,
      required this.theme,
      required this.circleImage,
      required this.leftStart,
      required this.leftEnd,
      required this.rightStart,
      required this.rightEnd,
      this.tags,
      this.onTap})
      : super(key: key);

  final GlobalThemeController theme;
  final Widget circleImage;
  final String leftStart;
  final String leftEnd;
  final String rightStart;
  final String rightEnd;
  final List<String>? tags;
  final Function()? onTap;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: theme.primaryColor2,
      borderRadius: BorderRadius.circular(9),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(9),
        child: Padding(
          padding: const EdgeInsets.all(12.0),
          child: Row(
            children: [
              ClipOval(child: circleImage),
              buildRowGap(8.0),
              Expanded(
                flex: 1,
                child: Column(
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Row(
                          children: [
                            Text(
                              leftStart,
                              style: TextStyle(
                                  color: theme.textColor1,
                                  fontSize: 16,
                                  fontWeight: FontWeight.bold),
                            ),
                            ...tags?.map((tag) => Row(
                                      children: [
                                        buildRowGap(8.0),
                                        Container(
                                          padding: const EdgeInsets.symmetric(
                                              horizontal: 4, vertical: 2),
                                          decoration: BoxDecoration(
                                              borderRadius:
                                                  BorderRadius.circular(4.0),
                                              border: Border.all(
                                                  color: theme.primaryColor1,
                                                  width: 1)),
                                          child: Text(
                                            tag,
                                            style: TextStyle(
                                                color: theme.textColor1,
                                                fontSize: 12),
                                          ),
                                        ),
                                      ],
                                    )) ??
                                []
                          ],
                        ),
                        Text(
                          rightStart,
                          style: TextStyle(color: theme.textColor1),
                        )
                      ],
                    ),
                    buildColumnGap(6.0),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Expanded(
                          child: Text(
                            leftEnd,
                            style: TextStyle(color: theme.textColor2),
                          ),
                        ),
                        Text(
                          rightEnd,
                          style: TextStyle(color: theme.textColor2),
                        )
                      ],
                    ),
                  ],
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}

class CardButton extends StatelessWidget {
  const CardButton(
      {Key? key,
      required this.theme,
      required this.text,
      required this.icon,
      required this.backgroundColor,
      this.center,
      this.onPressed})
      : super(key: key);

  final GlobalThemeController theme;
  final String text;
  final Widget icon;
  final MaterialStateProperty<Color> backgroundColor;
  final void Function()? onPressed;
  final bool? center;

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
        style: ButtonStyle(
            shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(18.0),
            )),
            foregroundColor: MaterialStateProperty.all(theme.textColor1),
            backgroundColor: backgroundColor),
        onPressed: () {
          onPressed?.call();
        },
        child: Padding(
          padding: const EdgeInsets.symmetric(vertical: 16),
          child: Row(
            mainAxisAlignment: center ?? false
                ? MainAxisAlignment.center
                : MainAxisAlignment.spaceBetween,
            children: [
              Text(
                text,
                style: TextStyle(color: theme.textColor1, fontSize: 16),
              ),
              buildRowGap(8.0),
              icon
            ],
          ),
        ));
  }
}

class UserCard extends StatelessWidget {
  const UserCard({
    Key? key,
    required this.theme,
    required this.userCardData,
  }) : super(key: key);

  final GlobalThemeController theme;
  final UserCardData userCardData;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(16),
        color: theme.primaryColor2.withOpacity(0.2),
        boxShadow: [
          BoxShadow(
            color: Color(0x11000000),
            spreadRadius: 3,
            blurRadius: 7,
            offset: const Offset(0, 3),
          )
        ],
      ),
      alignment: Alignment.center,
      child: Column(
        children: [
          Flexible(
            child: Container(
              alignment: Alignment.bottomLeft,
              decoration: BoxDecoration(
                  borderRadius: const BorderRadius.all(Radius.circular(16)),
                  image: DecorationImage(
                      fit: BoxFit.cover,
                      image: NetworkImage(userCardData.img))),
              child: Container(
                height: 93,
                padding: EdgeInsets.all(18),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          userCardData.name,
                          style: TextStyle(
                              fontSize: 32,
                              fontWeight: FontWeight.bold,
                              color: Color(0xFFFFFFFF)),
                        ),
                        Row(
                          children: [
                            buildRowGap(1.0),
                            svgLocation(),
                            buildRowGap(8.0),
                            Text(
                              userCardData.location,
                              style: TextStyle(
                                  fontSize: 16, color: Color(0xFF988DA2)),
                            )
                          ],
                        )
                      ],
                    ),
                    Container(
                      padding:
                          EdgeInsets.symmetric(horizontal: 8.0, vertical: 4.0),
                      decoration: BoxDecoration(
                        color: Color(0x33FF9877),
                        borderRadius:
                            const BorderRadius.all(Radius.circular(16)),
                      ),
                      child: Text(
                        '${userCardData.age}age',
                        style: TextStyle(
                            fontSize: 14,
                            color: Color(0xFFFF9877),
                            fontWeight: FontWeight.bold),
                      ),
                    )
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
