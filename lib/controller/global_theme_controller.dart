import 'package:flutter/material.dart';
import 'package:get/get_state_manager/src/simple/get_controllers.dart';

class GlobalThemeController extends GetxController {
  var successColor = const Color.fromARGB(255, 80, 160, 255);
  var receiveColor = const Color.fromARGB(255, 80, 160, 255);
  var sendColor = const Color.fromARGB(255, 80, 160, 255);
  var primaryColor1 = const Color.fromARGB(255, 80, 160, 255);
  var primaryColor2 = const Color.fromARGB(255, 25, 27, 31);
  var backgroundColor1 = const Color.fromARGB(255, 1, 3, 17);
  var textColor1 = const Color.fromARGB(255, 255, 255, 255);
  var textColor2 = const Color.fromARGB(255, 135, 133, 133);
  var inputBackgroudColor = const Color.fromARGB(255, 48, 48, 52);
  var svgColor1 = const Color.fromARGB(255, 255, 255, 255);
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
