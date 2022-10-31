// ignore_for_file: prefer_const_constructors, avoid_print

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:suilove/common/svg.dart';
import 'package:suilove/main.dart';
// ignore: unused_import
import 'package:url_launcher/url_launcher.dart';
import 'package:suilove/pages/welcome_page.dart';
import 'package:url_launcher/url_launcher_string.dart';

class MyDrawer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Drawer(
      width: 200,
      child: ListView(
        children: <Widget>[
          ListTile(
              title: Text(
                'Github',
                textAlign: TextAlign.right,
              ),
              onTap: () =>
                  launchUrlString('https://github.com/sui-love/suilove')),
          ListTile(
            title: Text(
              'Logout',
              textAlign: TextAlign.right,
            ),
            onTap: () => {
              suiWallet.deleteWallet(),
              Get.to(const WelcomePage()),
            },
          ),
        ],
      ),
    );
  }
}
