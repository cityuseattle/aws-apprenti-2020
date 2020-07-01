"""
Authors: Alejo Garcia, Alexander Wilson, Dain Jensen
File: tictactoe.py
Date: ** JUNE 2020
Assignment: Final Project
"""

import random
# Spaces dictionary keeps track of which space in the 3x3 grid holds the value of X or O
spaces = {'A1': ' ', 'A2': ' ', 'A3': ' ', 'B1': ' ', 'B2': ' ', 'B3': ' ', 'C1': ' ', 'C2': ' ', 'C3': ' '}
# newQueue keeps track of what spaces have been already played.
newQueue = []
# end determines if the game is over or not.
end = False
# play again determines if the game will be played again or not.
playAgain = True
# play determines if the player wants to play the game.
play = False
# bot determines if the player will play against a bot or person.
bot = False


# main function is the driver for all other functions.
def main():
    intro()


# intro function introduces the player to the game, establishes baselines, and begins or quits the game.
def intro():
    global play
    # play = False

    # This loop determines if the game will be played or not.
    while not play and playAgain:
        # Gets user input to determine how many players there will be.
        try:
            playerCount = input("\nWelcome to the game! How many players are there?\n"
                                "Pick 1 or 2 or 'q' at any time to quit. ")
        # Catches type errors if the user does not put in the correct input.
        except TypeError:
            print("Stop trying to break my game!")
        # if there are no errors, the user input will be passed through and the game will begin.
        else:
            # Plays one player
            if playerCount == '1':
                currentBoard()
                play = True
                onePlayer()
            # Plays two players
            elif playerCount == '2':
                currentBoard()
                play = True
                twoPlayers()
            # Quits the game
            elif str(playerCount.lower()) == 'q':
                print("Goodbye!")
                exit()
            # Tells the user that their input isn't good.
            else:
                print("Sorry that is not an option.")
        print("End of game.")
        # Checks for rematch
        rematch()


# The currentBoard function creates the game table based on what moves the players have played.
def currentBoard():
    print("\nCurrent board:\n")
    print(f"\t A   B   C\n")
    print(f"1\t {spaces['A1']} | {spaces['B1']} | {spaces['C1']} ")
    print("\t---+---+---")
    print(f"2\t {spaces['A2']} | {spaces['B2']} | {spaces['C2']} ")
    print("\t---+---+---")
    print(f"3\t {spaces['A3']} | {spaces['B3']} | {spaces['C3']} \n")


# The onePlayer function begins the game in single player mode vs a bot.
def onePlayer():
    global newQueue
    global spaces
    global end
    global bot
    # turn keeps track of which players turn it is: 1 for player one, two for player 2.
    # 0 is default so it can give game instructions to player one.
    turn = 0
    # playerOne is assigned X
    playerOne = 'X'
    # playerTwo is assigned O
    playerTwo = 'O'
    # count keeps tracks of how many more moves there are left in the game.
    count = 9
    # bot activates the bot player. This is used later for the results screen.
    bot = True

    # This loop keeps the game going until a player wins or there are no available moves left.
    while count != 0 and not end:
        # This if statement introduces how to add input in the game
        if turn == 0:
            print("Please pick your move: (ex: A1, B2, C1 ...)")
            # currentMove stores player ones move
            currentMove = input("Player one: ").upper()
            # This if statement quits the game.
            if currentMove.lower() == 'q':
                print("Goodbye!")
                exit()
            # This statement checks to see if the move has been played yet.
            # If it has not, the move will be added to the board, the player turn will switch,
            # and count will decrease, and a new board will be printed to the screen with updated
            # moves.
            elif currentMove not in newQueue and currentMove in spaces:
                newQueue.append(currentMove)
                spaces[currentMove] = playerOne
                turn = 2
                count -= 1
                currentBoard()
                # checkWin checks to see if either player has won yet.
                checkWin()
            # This statement tells the user if the move is not valid.
            else:
                print("Not a valid move!")
        # This statement prompts player one the same as the last if statement.
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
        # This statement prepares the bot to pick a move
        elif turn == 2:
            # This list contains duplicates of the keys contained in the spaces dictionary
            listSpaces = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3']

            # randomMove grabs a random value to pull from listSpaces.
            randomMove = random.randint(0, len(listSpaces)-1)
            # currentMove assigns the random index from randomMove and grabs the value from listSpaces.
            currentMove = listSpaces[randomMove]

            # This statement checks to make sure the move has not been played yet.
            if currentMove not in newQueue and currentMove in spaces:
                print(f"Bot's move: {currentMove}")
                input("Press any key to continue and see the new board.")
                newQueue.append(currentMove)
                spaces[currentMove] = playerTwo
                turn = 1
                count -= 1
                currentBoard()
                checkWin()


# This function is the same as onePlayer() but prompts a second user after the first plays.
def twoPlayers():
    global newQueue
    global spaces
    global end
    turn = 0
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


# This function checks to see if a player has won.
def checkWin():
    global end
    # The next 8 variables keep track of how many Xs and Os are players.
    rowA = 0
    rowB = 0
    rowC = 0
    row1 = 0
    row2 = 0
    row3 = 0
    a1Cross = 0
    c1Cross = 0

    # This loop iterates through spaces dictionary and stores its keys and values.
    for k, v in spaces.items():
        # This if/elif statement checks to see what keys it has to compare.
        if 'A' in k:
            # This statement checks to see if the value is X or O
            if v == 'X':
                rowA += 1
            elif v == 'O':
                rowA -= 1

            # This statement checks to see if the value is X or O
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

        # After counting the keys and values, this if/elif statement checks the variables to see
        # if there is a winner. Player one wins if a variable reaches3.
        # Player two (or bot) wins if the player reaches -3.
        # Then a winner is announced base on the count.
        if rowA == 3 or rowB == 3 or rowC == 3 or row1 == 3 or \
                row2 == 3 or row3 == 3 or a1Cross == 3 or c1Cross == 3:
            print("Player one wins!")
            # This function writes the game moves to a file.
            writeToFile()
            end = True
            break
        elif rowA == -3 or rowB == -3 or rowC == -3 or row1 == -3 or \
                row2 == -3 or row3 == -3 or a1Cross == -3 or c1Cross == -3:
            if bot:
                print("You got beat by a bot!")
                writeToFile()
            else:
                print("Player two wins!")
                writeToFile()
            end = True
            break


# This function takes the dictionary of spaces and writes it to a file
# named tictactoe.txt. The dictionary will contain all of the moves played
# before the game ended.
def writeToFile():
    global spaces
    gameStats = open('tictactoe.txt', 'a')
    gameStats.write("\n" + str(spaces) )
    gameStats.close()


# This function prompts the users if they would like a rematch.
def rematch():
    global playAgain
    global spaces
    global newQueue
    global play
    global end
    # Prompts user input requesting a rematch.
    ans = input("Enter Y/y to play again. Any key to quit.")
    # If the player wants a rematch, the variables will reset.
    if ans.lower() == 'y':
        spaces = {'A1': ' ', 'A2': ' ', 'A3': ' ', 'B1': ' ', 'B2': ' ', 'B3': ' ', 'C1': ' ', 'C2': ' ', 'C3': ' '}
        newQueue = []
        end = False
        playAgain = True
        play = False
    # Else, the function will terminate and the game will end.
    else:
        playAgain = False


# This calls the main function.
main()
