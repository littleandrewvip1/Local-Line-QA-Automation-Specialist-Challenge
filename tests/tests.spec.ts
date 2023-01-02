import { test, expect, Page } from '@playwright/test';
import { printTime }  from '../commons/common';
import { PageTicTacToe } from '../pages/tictactoe';


test.describe('Validate TicTacToe page on load', () => {

    var pageTicTacToe;

    test.beforeEach(async ({ page }) => {

        pageTicTacToe = new PageTicTacToe(page, 'https://localline.github.io/QA-Automation-Specialist-Challenge/');
        await pageTicTacToe.goto();
    })

    test('Game - validate page on load', async ({ page }) => {

        await pageTicTacToe.ValidateUIOnLoad();
    })
});

test.describe('Validate \"\It\'s X\'s turn\" and \"It\'s O\'s turn\" are correctly displayed', () => { 

    var pageTicTacToe;

    test.beforeEach(async ({ page }) => {

        pageTicTacToe = new PageTicTacToe(page, 'https://localline.github.io/QA-Automation-Specialist-Challenge/');
        await pageTicTacToe.goto();
    })

    test('Validate messages are correctly displayed', async ({ page }) => {

        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.ItsOTurnIsDisplayed();
        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.ItsXTurnIsDisplayed();
        await pageTicTacToe.cellTwoOne.click();
        await pageTicTacToe.ItsOTurnIsDisplayed();
    })
});

test.describe('Validate test scenarios where X player is expected to win', () => {

    var pageTicTacToe;

    test.beforeEach(async ({ page }) => {

        pageTicTacToe = new PageTicTacToe(page, 'https://localline.github.io/QA-Automation-Specialist-Challenge/');
        await pageTicTacToe.goto();
    })    
    // defect
    test('X player wins by diagonal - top right -> bottom left', async ({ page }) => {

        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellZeroTwo.click();
        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellOneTwo.click();
        await pageTicTacToe.cellTwoZero.click();

        // 'player X has won message' should be displayed
        await pageTicTacToe.PlayerXWon();
    })
    // defect
    test('X player wins by diagonal - top left -> bottom right', async ({ page }) => {

        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellZeroTwo.click();
        await pageTicTacToe.cellTwoTwo.click();

        // 'player X has won message' should be displayed
        await pageTicTacToe.PlayerXWon();
    })
    // defect
    test('X player wins by vertical - left', async ({ page }) => {

        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellTwoZero.click();

        // 'player X has won message' should be displayed
        await pageTicTacToe.PlayerXWon();
    })
    // defect
    test('X player wins by vertical - middle', async ({ page }) => {;

        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellZeroTwo.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellOneTwo.click();
        await pageTicTacToe.cellTwoOne.click();

        // 'player X has won message' should be displayed
        await pageTicTacToe.PlayerXWon();
    })
    // defect
    test('X player wins by vertical - right', async ({ page }) => {

        await pageTicTacToe.cellZeroTwo.click();
        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellOneTwo.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellTwoTwo.click();

        // 'player X has won message' should be displayed
        await pageTicTacToe.PlayerXWon();
    })
    //defect
    test('X player wins by horizontal - top', async ({ page }) => {

        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellZeroTwo.click();

        // 'player X has won message' should be displayed
        await pageTicTacToe.PlayerXWon();
    })
    //defect
    test('X player wins by horizontal - middle', async ({ page }) => {

        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellOneTwo.click();

        // 'player X has won message' should be displayed
        await pageTicTacToe.PlayerXWon();
    })
    //defect
    test('X player wins by horizontal - bottom', async ({ page }) => {

        await pageTicTacToe.cellTwoZero.click();
        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellTwoOne.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellTwoTwo.click();

        // 'player X has won message' should be displayed
        await pageTicTacToe.PlayerXWon();
    })
});

test.describe('Validate test scenarios where O player is expected to win', () => {

    var pageTicTacToe;

    test.beforeEach(async ({ page }) => {

        pageTicTacToe = new PageTicTacToe(page, 'https://localline.github.io/QA-Automation-Specialist-Challenge/');
        await pageTicTacToe.goto();
    })    
    // defect
    test('O player wins by diagonal - top right -> bottom left', async ({ page }) => {

        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellZeroTwo.click();
        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellTwoZero.click();

        // 'player O has won message' should be displayed
        await pageTicTacToe.PlayerOWon();
    })
    // defect
    test('O player wins by diagonal - top left -> bottom right', async ({ page }) => {

        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellZeroTwo.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellTwoTwo.click();

        // 'player O has won message' should be displayed
        await pageTicTacToe.PlayerOWon();
    })
    // defect
    test('O player wins by vertical - left', async ({ page }) => {

        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellZeroTwo.click();
        await pageTicTacToe.cellTwoZero.click();

        // 'player O has won message' should be displayed
        await pageTicTacToe.PlayerOWon();
    })
    // defect
    test('O player wins by vertical - middle', async ({ page }) => {

        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellZeroTwo.click();
        await pageTicTacToe.cellTwoOne.click();

        // 'player O has won message' should be displayed
        await pageTicTacToe.PlayerOWon();
    })
    // defect
    test('O player wins by vertical - right', async ({ page }) => {

        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellZeroTwo.click();
        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellOneTwo.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellTwoTwo.click();

        // 'player O has won message' should be displayed
        await pageTicTacToe.PlayerOWon();
    })
    //defect
    test('O player wins by horizontal - top', async ({ page }) => {

        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellTwoZero.click();
        await pageTicTacToe.cellZeroTwo.click();

        // 'player O has won message' should be displayed
        await pageTicTacToe.PlayerOWon();
    })
    //defect
    test('O player wins by horizontal - middle', async ({ page }) => {

        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellTwoZero.click();
        await pageTicTacToe.cellOneTwo.click();

        // 'player O has won message' should be displayed
        await pageTicTacToe.PlayerOWon();
    })
    //defect
    test('O player wins by horizontal - bottom', async ({ page }) => {

        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellTwoZero.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellTwoOne.click();
        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellTwoTwo.click();

        // 'player O has won message' should be displayed
        await pageTicTacToe.PlayerOWon();
    })
});

test.describe('Validate restart game test scenario', () => {

    var pageTicTacToe;

    test.beforeEach(async ({ page }) => {

        pageTicTacToe = new PageTicTacToe(page, 'https://localline.github.io/QA-Automation-Specialist-Challenge/');
        await pageTicTacToe.goto();
    })    
    // defect
    test('Game - Game restarts on \"Restart Game\" button click', async ({ page }) => {

        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellTwoZero.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellTwoOne.click();
        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellTwoTwo.click();
        
        await pageTicTacToe.buttonRestartGame.click();

        // expect page to refresh and discard previous X/O selections, check a particular cell does not have previously set value
        pageTicTacToe.cellOneOne.innerText().then(res => {
            console.log(res);
            expect(res).not.toBe('X');
        })

    })
});