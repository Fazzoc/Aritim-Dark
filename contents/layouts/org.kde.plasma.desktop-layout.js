//var plasma = getApiVersion(1);
var user = require("os").userInfo().username

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "800",
                    "DialogWidth": "1420"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "arrangement": "1",
                    "iconSize": "3",
                    "positions": "20,10,desktop:/Home.desktop,0,1,desktop:/Your Stuff Here,2,1,desktop:/OneDrive,1,1,desktop:/trash:⁄.desktop,19,9",
                    "previews": "false",
                    "showToolbox": "false",
                    "sortMode": "-1"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///home/" + user + "/Pictures/Wallpapers/Unsplash/Starry Nebula 219.png"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        },
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "1",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "761",
                    "DialogWidth": "1194"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "topright",
                    "ToolBoxButtonX": "1890"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///home/" + user + "/.local/share/wallpapers/Aritim-Light-Wallpaper-1920x1080.jpg"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        },
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "2",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "sortMode": "-1"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///home/" + user + "/.local/share/wallpapers/sea_shore_minimalism_100029_1920x1080.jpg"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "5"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "5"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "5"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100",
                            "immutability": "1"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "100",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "100"
                        },
                        "/Configuration/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "customButtonImage": "start-here-manjaro",
                            "favoriteSystemActions": "save-session",
                            "favoritesPortedToKAstats": "true",
                            "useCustomButtonImage": "true"
                        },
                        "/Configuration/Configuration/General": {
                            "customButtonImage": "start-here-manjaro",
                            "favoriteSystemActions": "save-session",
                            "favoritesPortedToKAstats": "true",
                            "useCustomButtonImage": "true"
                        },
                        "/Configuration/Configuration/Shortcuts": {
                            "global": "Alt+F1"
                        },
                        "/Configuration/General": {
                            "customButtonImage": "start-here-kde",
                            "favoriteSystemActions": "save-session",
                            "favoritesPortedToKAstats": "true",
                            "useCustomButtonImage": "true"
                        },
                        "/Configuration/Shortcuts": {
                            "global": "Alt+F1"
                        },
                        "/Shortcuts": {
                            "global": "Alt+F1"
                        }
                    },
                    "plugin": "org.kde.plasma.kicker"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "4"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "4"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "containmentType": "Plasma",
                            "showIcon": "false"
                        }
                    },
                    "plugin": "org.kde.windowtitle"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "10"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "10"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "10"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        },
                        "/Configuration/General": {
                            "length": "8"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "launchers": "applications:org.kde.konsole.desktop,applications:org.kde.dolphin.desktop,applications:firefox.desktop,applications:telegramdesktop.desktop,applications:clementine.desktop,applications:spotify.desktop,applications:visual-studio-code.desktop,applications:virtualbox.desktop,applications:qbittorrent.desktop,applications:octopi.desktop,applications:org.kde.ksysguard.desktop,applications:systemsettings.desktop"
                        },
                        "/Configuration/Configuration/General": {
                            "launchers": "applications:org.kde.konsole.desktop,applications:org.kde.dolphin.desktop,applications:firefox.desktop,applications:telegramdesktop.desktop,applications:clementine.desktop,applications:spotify.desktop,applications:visual-studio-code.desktop,applications:virt-manager.desktop,applications:qbittorrent.desktop,applications:octopi.desktop,applications:org.kde.ksysguard.desktop,applications:systemsettings.desktop"
                        },
                        "/Configuration/General": {
                            "launchers": "applications:org.kde.konsole.desktop,applications:org.kde.dolphin.desktop,applications:telegramdesktop.desktop,applications:firefox.desktop,applications:clementine.desktop,applications:spotify.desktop,applications:visual-studio-code.desktop,applications:emacs.desktop,applications:virtualbox.desktop,applications:qbittorrent.desktop,applications:octopi.desktop,applications:org.kde.ksysguard.desktop,applications:systemsettings.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "11"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Advanced": {
                            "interfacesWhitelist": "wlp2s0",
                            "interfacesWhitelistEnabled": "true"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "noteId": "677f07c8-b2ce-4f92-bb65-76e3fb4c08"
                        }
                    },
                    "plugin": "org.kde.netspeedWidget"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "96",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "100"
                        },
                        "/Configuration/Configuration/Configuration/Containments/8": {
                            "formfactor": "2"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "83"
                        }
                    },
                    "plugin": "gr.ictpro.jsalatas.plasma.pstate"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "show_lockScreen": "false"
                        },
                        "/Configuration/Configuration/General": {
                            "show_lockScreen": "false"
                        },
                        "/Configuration/General": {
                            "show_lockScreen": "false"
                        }
                    },
                    "plugin": "org.kde.plasma.lock_logout"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "84",
                    "DialogWidth": "1920"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 1.4444444444444444,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 106.66666666666667,
            "minimumLength": 106.66666666666667,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
    ;

plasma.loadSerializedLayout(layout);
