// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

let dfxStatusBarItem: vscode.StatusBarItem;
let runningStatus = false;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const dfxToggleCommandId = 'dfx.toggle';
	context.subscriptions.push(vscode.commands.registerCommand(dfxToggleCommandId, toggleDfxStatus));

	// create a new status bar item that we can now manage
	dfxStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
	dfxStatusBarItem.command = dfxToggleCommandId;
	dfxStatusBarItem.text = '∞ Checking...';
	dfxStatusBarItem.show();
	context.subscriptions.push(dfxStatusBarItem);

	console.info('[dfx] extension active!');
}

function toggleDfxStatus(): void {
	runningStatus = !runningStatus;
	updateStatusBarItemText();
}

function updateStatusBarItemText(): void {
	dfxStatusBarItem.text = runningStatus ? '∞ Running' : '∞ Stopped';
}

// this method is called when your extension is deactivated
export function deactivate() {}
