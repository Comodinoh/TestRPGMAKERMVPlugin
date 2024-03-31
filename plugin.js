/*
 * @plugindesc Test plugin
 * @author Comodinoh
 * 
 * @param Settings
 * @desc Contains all of the main plugin settings
 * 
 * @param Enable Dialog System
 * @desc When enabled, turns on the dialog system
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @default false
 * @parent Settings
 * 
 * @param Text Game Variable
 * @desc Assigns a game variable to be used to store dialog text
 * @type variable
 * @default 1
 * @parent Settings
 * 
 * 
 * @param Dialog Settings
 * @desc Contains all of the dialog settings
 * 
 * @param Dialog List
 * @desc List that stores all of the selectable dialog
 * @type text[]
 * @default ["Lore Ipsum"]
 * @parent Dialog Settings
 * 
 * @param Default Dialog
 * @desc The dialog returned when an invalid value is used in the GetDialog plugin command
 * @type text
 * @default Hello, \\P[0]
 * 
 * 
 * @help
 * For more information on how to use this plugin, please see the
 * Github page:
 * 
 * meow
 * 
 * 
 * 
 * 
*/