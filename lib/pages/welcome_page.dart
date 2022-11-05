import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../controller/global_theme_controller.dart';

class WelcomePage extends StatelessWidget {
  const WelcomePage({super.key});

  @override
  Widget build(context) {
    GlobalThemeController theme = Get.find();

    return Scaffold(
        backgroundColor: theme.backgroundColor1,
        appBar: AppBar(
          backgroundColor: theme.backgroundColor1,
          elevation: 0,
        ),
        body: null);
  }
}
