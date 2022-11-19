import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:suilove/controller/global_theme_controller.dart';

GlobalThemeController theme = GlobalThemeController();

svgLogo({double? height, double? width}) {
  return SvgPicture.asset(
    'assets/logo.svg',
    semanticsLabel: 'Logo',
    height: height ?? 68,
    width: width ?? 68,
  );
}

svgTick({Color? color}) {
  return SvgPicture.asset(
    'assets/tick.svg',
    semanticsLabel: 'Tick',
    height: 20,
    width: 20,
    color: color ?? theme.primaryColor1,
  );
}

svgBack({Color? color}) {
  return SvgPicture.asset(
    'assets/back.svg',
    semanticsLabel: 'Back',
    height: 25,
    width: 25,
    color: color ?? theme.primaryColor1,
  );
}

svgNewTo() {
  return SvgPicture.asset(
    'assets/new_to.svg',
    semanticsLabel: 'New To',
    height: 320,
    width: 320,
  );
}

svgCreateWallet() {
  return SvgPicture.asset(
    'assets/create_wallet.svg',
    semanticsLabel: 'Create Wallet',
    height: 320,
    width: 320,
  );
}

svgBackupWallet() {
  return SvgPicture.asset(
    'assets/backup_wallet.svg',
    semanticsLabel: 'Backup Wallet',
    height: 320,
    width: 320,
  );
}

svgMenu({double? height, double? width, Color? color}) {
  return SvgPicture.asset(
    'assets/menu.svg',
    semanticsLabel: 'Menu',
    height: height ?? 26,
    width: width ?? 26,
    color: color ?? theme.primaryColor1,
  );
}

svgCoins({double? height, double? width, Color? color}) {
  return SvgPicture.asset(
    'assets/coins.svg',
    semanticsLabel: 'Coins',
    height: height ?? 28,
    width: width ?? 28,
    color: color ?? theme.primaryColor1,
  );
}

svgNFTs({double? height, double? width, Color? color}) {
  return SvgPicture.asset(
    'assets/nfts.svg',
    semanticsLabel: 'NFTs',
    height: height ?? 24,
    width: width ?? 24,
    color: color ?? theme.primaryColor1,
  );
}

svgApps({double? height, double? width, Color? color}) {
  return SvgPicture.asset(
    'assets/apps.svg',
    semanticsLabel: 'Apps',
    height: height ?? 21,
    width: width ?? 21,
    color: color ?? theme.primaryColor1,
  );
}

svgActivity({double? height, double? width, Color? color}) {
  return SvgPicture.asset(
    'assets/activity.svg',
    semanticsLabel: 'Activity',
    height: height ?? 24,
    width: width ?? 24,
    color: color ?? theme.primaryColor1,
  );
}

svgSend({double? height, double? width, Color? color}) {
  return SvgPicture.asset(
    'assets/send.svg',
    semanticsLabel: 'Send',
    height: height ?? 22,
    width: width ?? 22,
    color: color ?? theme.primaryColor1,
  );
}

svgReceive({double? height, double? width, Color? color}) {
  return SvgPicture.asset(
    'assets/receive.svg',
    semanticsLabel: 'Receive',
    height: height ?? 22,
    width: width ?? 22,
    color: color ?? theme.primaryColor1,
  );
}

svgSwap({double? height, double? width, Color? color}) {
  return SvgPicture.asset(
    'assets/swap.svg',
    semanticsLabel: 'Swap',
    height: height ?? 24,
    width: width ?? 24,
    color: color ?? theme.primaryColor1,
  );
}

svgStack({double? height, double? width, Color? color}) {
  return SvgPicture.asset(
    'assets/stack.svg',
    semanticsLabel: 'Stack',
    height: height ?? 24,
    width: width ?? 24,
    color: color ?? theme.primaryColor1,
  );
}

svgCopy({double? height, double? width, Color? color}) {
  return SvgPicture.asset(
    'assets/copy.svg',
    semanticsLabel: 'Copy',
    height: height ?? 14,
    width: width ?? 14,
    color: color ?? theme.primaryColor1,
  );
}

svgTSend({double? height, double? width, Color? color}) {
  return SvgPicture.asset(
    'assets/t_send.svg',
    semanticsLabel: 'Transaction Send',
    height: height ?? 18,
    width: width ?? 18,
    color: color ?? theme.primaryColor1,
  );
}

svgTReceive({double? height, double? width, Color? color}) {
  return SvgPicture.asset(
    'assets/t_receive.svg',
    semanticsLabel: 'Transaction Receive',
    height: height ?? 18,
    width: width ?? 18,
    color: color ?? theme.primaryColor1,
  );
}

svgView({double? height, double? width, Color? color}) {
  return SvgPicture.asset(
    'assets/view.svg',
    semanticsLabel: 'View',
    height: height ?? 24,
    width: width ?? 24,
    color: color ?? theme.primaryColor1,
  );
}

svgClose({double? height, double? width, Color? color}) {
  return SvgPicture.asset(
    'assets/close.svg',
    semanticsLabel: 'Close',
    height: height ?? 24,
    width: width ?? 24,
    color: color ?? theme.primaryColor1,
  );
}

svgDelete({double? height, double? width, Color? color}) {
  return SvgPicture.asset(
    'assets/delete.svg',
    semanticsLabel: 'Delete',
    height: height ?? 62,
    width: width ?? 62,
  );
}

svgDiscord({double? height, double? width, Color? color}) {
  return SvgPicture.asset(
    'assets/discord.svg',
    semanticsLabel: 'Discord',
    height: height ?? 24,
    width: width ?? 24,
  );
}

svgLike({double? height, double? width, Color? color}) {
  return SvgPicture.asset(
    'assets/like.svg',
    semanticsLabel: 'Like',
    height: height ?? 62,
    width: width ?? 62,
  );
}

svgTwitter({double? height, double? width, Color? color}) {
  return SvgPicture.asset('assets/twitter.svg',
      semanticsLabel: 'Twitter',
      height: height ?? 24,
      width: width ?? 24,
      color: Color(0xFF54ACEE));
}

svgStar({double? height, double? width, Color? color}) {
  return SvgPicture.asset(
    'assets/star.svg',
    semanticsLabel: 'Star',
    height: height ?? 30,
    width: width ?? 30,
  );
}

svgLocation({double? height, double? width, Color? color}) {
  return SvgPicture.asset('assets/location.svg',
      semanticsLabel: 'Location',
      height: height ?? 16,
      width: width ?? 16,
      color: Color(0xFFCCCCCC));
}

svgLogoL({double? height, double? width, Color? color}) {
  return SvgPicture.asset(
    'assets/logo-l.svg',
    semanticsLabel: 'LogoL',
    height: height ?? 180,
    width: width ?? 180,
  );
}

svgUnStar({double? height, double? width, Color? color}) {
  return SvgPicture.asset(
    'assets/unstar.svg',
    semanticsLabel: 'Unstar',
    height: height ?? 80,
    width: width ?? 80,
  );
}

svgStared({double? height, double? width, Color? color}) {
  return SvgPicture.asset(
    'assets/stared.svg',
    semanticsLabel: 'Stared',
    height: height ?? 80,
    width: width ?? 80,
  );
}
