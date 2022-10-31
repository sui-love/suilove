import 'package:suilove/common/layout.dart';
import 'package:suilove/common/svg.dart';
import 'package:suilove/pages/create_wallet.dart';
import 'package:suilove/pages/import_mnemonic.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../controller/global_theme_controller.dart';

class LandingPage extends StatelessWidget {
  const LandingPage({super.key});
  @override
  Widget build(context) {
    GlobalThemeController theme = Get.find();
    return Scaffold(
      backgroundColor: theme.backgroundColor1,
      appBar: AppBar(
        backgroundColor: theme.backgroundColor1,
        elevation: 0.0,
        leading: IconButton(
            onPressed: () {
              Get.back();
            },
            icon: svgBack()),
      ),
      body: Container(
        padding: theme.pageGap,
        constraints: const BoxConstraints.expand(),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Expanded(
              flex: 1,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      Center(
                        child: svgNewTo(),
                      ),
                      Text(
                        'New to',
                        style: TextStyle(
                          color: theme.svgColor1,
                          fontSize: 24,
                        ),
                      ),
                      Text(
                        'SuiLove',
                        style: TextStyle(
                          color: theme.svgColor1,
                          fontSize: 24,
                        ),
                      ),
                      buildColumnGap(12.0),
                      Text(
                        'Create a new wallet or import your existing wallet by 12-word seed phrase.',
                        style: TextStyle(
                          fontSize: 16,
                          color: theme.primaryColor1,
                        ),
                      ),
                    ],
                  )
                ],
              ),
            ),
            ElevatedButton(
              onPressed: () {
                Get.to(const CreateWalletPage());
              },
              style: ButtonStyle(
                  foregroundColor: MaterialStateProperty.all(theme.textColor1),
                  backgroundColor:
                      MaterialStateProperty.all(theme.primaryColor1)),
              child: Padding(
                padding: theme.buttonPadding,
                child: const Text('Create new wallet'),
              ),
            ),
            buildColumnGap(18.0),
            ElevatedButton(
              onPressed: () {
                Get.to(const ImportMnemonic());
              },
              style: ButtonStyle(
                  foregroundColor: MaterialStateProperty.all(theme.textColor1),
                  backgroundColor:
                      MaterialStateProperty.all(theme.primaryColor2)),
              child: Padding(
                padding: theme.buttonPadding,
                child: const Text('Import new wallet'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
