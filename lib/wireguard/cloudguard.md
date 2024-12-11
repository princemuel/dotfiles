# Connecting to Cloudflare WARP with WireGuard

Cloudflare's WARP VPN uses a slightly modified version of the WireGuard protocol, but it remains backwards compatible with the normal WireGuard client software. This means you can connect to it on platforms which don't yet have an official WARP client, e.g. your computer or [EdgeOS-based router](https://github.com/Lochnair/vyatta-wireguard).

Short Tutorial rewritten by Prince Muel, and Fuzzing with the REST API of the Cloudflare Registration.

> [!NOTE]
> This tutorial assumes you have Wireguard installed already.

## Step 1

Generate a WireGuard keypair, as usual:

`wg genkey | tee private.key | wg pubkey > public.key`

## Step 2

Register the public half with Cloudflare, changing the fields as appropriate:

```sh
curl -d '{"key":"PASTE_PUBLIC_KEY_HERE_FROM_WARPJSON_FILE", "install_id":"", "warp_enabled":true, "tos":"2024-12-09T00:00:00.000+01:00", "type":"Linux", "locale":"en_US"}' https://api.cloudflareclient.com/v0a737/reg | tee warp.json
```

(`tos` should be the exact date 'eg: 12-09-2024, december 09, 2024' you read and agreed to their [terms of service](https://www.cloudflare.com/application/terms/))

## Step 3

Find your 'warp.json' tunnel endpoint.

`jq '.config.peers[0]' warp.json`

And the IP address associated for your endpoint in 'warp.json':

`jq '.config.interface.addresses' warp.json`

> [!TIP]
> On linux, you can install jq using your distribution's package manager,
> otherwise, just check in the `warp.json` file created for the values needed

## Step 4

Construct your WireGuard config file.

```sh
sudo nano /etc/wireguard/warp.conf
```

It should look something like this:

```conf
[Interface]
Address = 172.16.0.2/32 (this IP is designated with the 'warp.json' IP Address)
Address = 2606:4700:110:8393:c41:e144:2989:a88c/128
DNS = 1.1.1.1, 1.0.0.1, 2606:4700:4700::1111, 2606:4700:4700::1001
PrivateKey = xxxxxxxxxxxxxxxxxx (generated via genkey's PrivateKey file)

[Peer]
Endpoint = engage.cloudflareclient.com:2408 (can be replaced with the Public IP of the Server)
AllowedIPs = 0.0.0.0/0, ::/0  (universal allocation of allowed IP Addresses)
PublicKey = yyyyyyyyyyyyyyyyyy (the one found on the warp.json file)
PersistentKeepalive = 25
```

## Step 5

Start the WireGuard interface using the configuration file:

```sh
sudo wg-quick up /etc/wireguard/warp.conf
```

To bring the interface down:

```sh
sudo wg-quick down /etc/wireguard/warp.conf
```

## Step 6

Check Wireguard's status

 To read: <https://www.ckn.io/blog/2017/11/14/wireguard-vpn-typical-setup/>
