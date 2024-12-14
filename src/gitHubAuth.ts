import  * as vscode from 'vscode';
import 'dotenv/config';

export const getGitHubAuth = async() =>{
    const GITHUB = "github";
    const scopes =['repo, user:email','delete_repo'];
    try{
        const session = await vscode.authentication.getSession(GITHUB,scopes);
        return session;
    }
    catch(error){
        vscode.window.showErrorMessage('GitHub authentication failed: ' + (error as Error).message);
    }
}