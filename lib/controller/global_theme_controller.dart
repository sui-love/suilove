import 'package:flutter/material.dart';
import 'package:get/get_state_manager/src/simple/get_controllers.dart';

class GlobalThemeController extends GetxController {
  var successColor = const Color.fromARGB(255, 234, 114, 140);
  var receiveColor = const Color.fromARGB(255, 234, 114, 140);
  var sendColor = const Color.fromARGB(255, 234, 114, 140);
  var primaryColor1 = const Color.fromARGB(255, 234, 114, 140);
  var primaryColor2 = const Color.fromARGB(255, 244, 140, 167);
  var backgroundColor1 = const Color.fromARGB(255, 255, 255, 255);
  var textColor1 = const Color.fromARGB(255, 255, 255, 255);
  var textColor2 = const Color.fromARGB(255, 255, 255, 255);
  var inputBackgroudColor = const Color.fromARGB(255, 244, 140, 167);
  var svgColor1 = const Color.fromARGB(255, 0, 0, 0);
  var dividerColor = const Color.fromARGB(255, 48, 48, 52);

  var pageGap = const EdgeInsets.only(top: 25, bottom: 40, left: 40, right: 40);

  var buttonPadding = const EdgeInsets.only(
    top: 16,
    bottom: 16,
    left: 60,
    right: 60,
  );

  var buttonPaddingSmall = const EdgeInsets.only(
    top: 6,
    bottom: 6,
    left: 12,
    right: 12,
  );
}
