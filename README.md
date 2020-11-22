# Foxlet Wallet (A Desktop Client for Stellar)

Foxlet allows you to encrypt your secret key and store it as a file locally on your computer. You can use it on Windows, Linux and Mac.

## Key Features

- No registration. Secret key and login information stored locally.
- Offline transaction signing. Protect the secret key from exposure to the Internet.
- Send/receive/convert lumens, assets and tokens.
- Buy/sell lumens, assets and tokens.
- Merge account.
- Create your own tokens.
- View balances and history.
- Manage trust lines, account data, inflation destination.
- Federation protocol support.
- Contacts support.
- Deposit/withdraw CNY, BTC.
- Participate ICO projects.

## Build

You should have Node.js installed. If not, install it ([Node version manager](https://github.com/creationix/nvm) is recommended).

- Run `npm install` to prepare.
- Run `npm start` to develop.
- Run `npm run dist` to build. You can use `npm run mac`, `npm run win` or `npm run linux` to build application according your system.

# Foxlet恒星钱包 🚀

Foxlet钱包也称为恒星桌面钱包或恒星离线钱包。它是一个注重安全的，功能完备的恒星客户端。

## 主要功能

- 无需注册，密钥以加密文件存在本地。
- 交易本地签名。密钥不会暴露到因特网。
- 支持发送、兑换任意资产。
- 支持交易任意资产。（恒星中任意资产均可两两交易）。
- 支持合并账号。
- 支持创建新资产。
- 查询资产和历史记录。
- 管理授信、账户数据、通胀地址。
- 全面支持联邦协议。通过联邦协议可提现到比特币、银行。
- 集成锚点充提服务，在钱包里即可完成充值、提现。
- 支持设置联系人和[fed.network](https://fed.network/)名称服务，可通过~短号发送资产给朋友。
- 支持恒星DaApp。

## 为什么需要这个钱包？

- 没有人比我们更懂社区的需求，所以让我们自己创造一个人民的钱包。
- 目前各渠道的钱包不太好用，而且基本没中文，广大中国人民很不满。
- 更安全的备份支持。离线钱包密钥加密存电脑，本地签名后提交易，不能更安全了。
- 人民需要什么样的钱包，我们就写什么样的钱包。
- 优化中国区的访问。
- 根据网关多年的经验，更好地服务用户。

## 开发和运行

先安装Node.js。没有安装的话，开发人员推荐使用[Node version manager](https://github.com/creationix/nvm)。

- 安装各种依赖包 `npm install`。
- 开发运行 `nw start`。在nwjs控制台运行 `nw.Window.get().reload()` 即可刷新改动。
- 编译运行 `npm run dist`。也可单独运行 `npm run mac`，`npm run win` 或`npm run linux`来编译对应系统的可执行文件。
