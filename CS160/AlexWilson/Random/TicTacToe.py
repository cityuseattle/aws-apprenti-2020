"""
Authors: Alejo Garcia, Alexander Wilson, Dain Jensen
File: tictactoe.py
Date: ** JUNE 2020
Assignment: Final Project
"""

import random
spaces = {'A1': ' ', 'A2': ' ', 'A3': ' ', 'B1': ' ', 'B2': ' ', 'B3': ' ', 'C1': ' ', 'C2': ' ', 'C3': ' '}
newQueue = []
end = False
playAgain = True
play = False
bot = False


def main():
    intro()


def intro():
    global play
    # play = False

    while not play and playAgain :
        try:
            playerCount = input("\nWelcome to the game! How many players are there?\n"
                                "Pick 1 or 2 or 'q' at any time to quit. ")
        except TypeError:
            print("Stop trying to break my game!")
        else:
            if playerCount == '1':
                currentBoard()
                play = True
                onePlayer()
            elif playerCount == '2':
                currentBoard()
                play = True
                twoPlayers()
            elif str(playerCount.lower()) == 'q':
                print("Goodbye!")
                exit()
            else:
                print("Sorry that is not an option.")
        print("End of game.")
        rematch()


def currentBoard():
    print("\nCurrent board:\n")
    print(f"\t A   B   C\n")
    print(f"1\t {spaces['A1']} | {spaces['B1']} | {spaces['C1']} ")
    print("\t---+---+---")
    print(f"2\t {spaces['A2']} | {spaces['B2']} | {spaces['C2']} ")
    print("\t---+---+---")
    print(f"3\t {spaces['A3']} | {spaces['B3']} | {spaces['C3']} \n")


def onePlayer():
    global newQueue
    global spaces
    global end
    global bot
    turn = 0
    playerOne = 'X'
    playerTwo = 'O'
    count = 9
    bot = True

    while count != 0 and not end:
        if turn == 0:
            print("Please pick your move: (ex: A1, B2, C1 ...)")
            currentMove = input("Player one: ").upper()
            print(currentMove)
            if currentMove.lower() == 'q':
                print("Goodbye!")
                exit()
            elif currentMove not in newQueue and currentMove in spaces:
                newQueue.append(currentMove)
                spaces[currentMove] = playerOne
                turn = 2
                count -= 1
                currentBoard()
                checkWin()
            else:
                print("Not a valid move!")
        elif turn == 1:
            print("Please pick your move: ")
            currentMove = input("Player one: ").upper()
            if currentMove.lower() == 'q':
                print("Goodbye!")
                exit()
            elif currentMove not in newQueue and currentMove in spaces:
                newQueue.append(currentMove)
                spaces[currentMove] = playerOne
                turn = 2
                count -= 1
                currentBoard()
                checkWin()
            else:
                print("Not a valid move!")
        elif turn == 2:
            listSpaces = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3']

            randomMove = random.randint(0, len(listSpaces)-1)
            currentMove = listSpaces[randomMove]

            if currentMove not in newQueue and currentMove in spaces:
                newQueue.append(currentMove)
                spaces[currentMove] = playerTwo
                turn = 1
                count -= 1
                currentBoard()
                checkWin()


def twoPlayers():
    global newQueue
    global spaces
    global end
    turn = 0
    # end = False
    playerOne = 'X'
    playerTwo = 'O'
    count = 9

    while count != 0 and not end:
        if turn == 0:
            print("Player one, please pick your move: (ex: A1, B2, C1 ...)")
            currentMove = input("Player one: ").upper()
            print(currentMove)
            if currentMove.lower() == 'q':
                print("Goodbye!")
                exit()
            elif currentMove not in newQueue and currentMove in spaces:
                newQueue.append(currentMove)
                spaces[currentMove] = playerOne
                turn = 2
                count -= 1
                currentBoard()
                checkWin()
            else:
                print("Not a valid move!")
        elif turn == 1:
            print("Player one, please pick your move: ")
            currentMove = input("Player one: ").upper()
            if currentMove.lower() == 'q':
                print("Goodbye!")
                exit()
            elif currentMove not in newQueue and currentMove in spaces:
                newQueue.append(currentMove)
                spaces[currentMove] = playerOne
                turn = 2
                count -= 1
                currentBoard()
                checkWin()
            else:
                print("Not a valid move!")
        elif turn == 2:
            print("Player two, please pick your move: ")
            currentMove = input("Player two: ").upper()
            if currentMove.lower() == 'q':
                print("Goodbye!")
                exit()
            elif currentMove not in newQueue and currentMove in spaces:
                newQueue.append(currentMove)
                spaces[currentMove] = playerTwo
                turn = 1
                count -= 1
                currentBoard()
                checkWin()
            else:
                print("Not a valid move!")



def checkWin():
    global end
    rowA = 0
    rowB = 0
    rowC = 0
    row1 = 0
    row2 = 0
    row3 = 0
    a1Cross = 0
    c1Cross = 0

    for k, v in spaces.items():
        if 'A' in k:
            if v == 'X':
                rowA += 1
            elif v == 'O':
                rowA -= 1

            if k == 'A1' and v == 'X':
                a1Cross += 1
            elif k == 'A1' and v == 'O':
                a1Cross -= 1
            elif k == 'A3' and v == 'X':
                c1Cross += 1
            elif k == 'A3' and v == 'O':
                c1Cross -= 1

        elif 'B' in k:
            if v == 'X':
                rowB += 1
            elif v == 'O':
                rowB -= 1

            if k == 'B2' and v == 'X':
                a1Cross += 1
                c1Cross += 1
            elif k == 'B2' and v == 'O':
                a1Cross -= 1
                c1Cross -= 1

        elif 'C' in k:
            if v == 'X':
                rowC += 1
            elif v == 'O':
                rowC -= 1

            if k == 'C1' and v == 'X':
                c1Cross += 1
            elif k == 'C1' and v == 'O':
                c1Cross -= 1
            elif k == 'C3' and v == 'X':
                a1Cross += 1
            elif k == 'C3' and v == 'O':
                a1Cross -= 1

        if '1' in k:
            if v == 'X':
                row1 += 1
            elif v == 'O':
                row1 -= 1
        elif '2' in k:
            if v == 'X':
                row2 += 1
            elif v == 'O':
                row2 -= 1
        elif '3' in k:
            if v == 'X':
                row3 += 1
            elif v == 'O':
                row3 -= 1

        if rowA == 3 or rowB == 3 or rowC == 3 or row1 == 3 or \
                row2 == 3 or row3 == 3 or a1Cross == 3 or c1Cross == 3:
            print("Player one wins!")
            end = True
            break
        elif rowA == -3 or rowB == -3 or rowC == -3 or row1 == -3 or \
                row2 == -3 or row3 == -3 or a1Cross == -3 or c1Cross == -3:
            if bot:
                print("You got beat by a bot!")
            else:
                print("Player two wins!")
            end = True
            break


def rematch():
    global playAgain
    global spaces
    global newQueue
    global play
    global end
    ans = input("Enter Y/y to play again. Any key to quit.")
    if ans.lower() == 'y':
        spaces = {'A1': ' ', 'A2': ' ', 'A3': ' ', 'B1': ' ', 'B2': ' ', 'B3': ' ', 'C1': ' ', 'C2': ' ', 'C3': ' '}
        newQueue = []
        end = False
        playAgain = True
        play = False
    else:
        playAgain = False


main()