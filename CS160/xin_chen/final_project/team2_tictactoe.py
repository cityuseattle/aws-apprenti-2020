from color import color
import random
import os
import sys
import time

# Here we will do a TicTacToe game:


# instantiate the color object
color = color()


# function to decide the current turn
def sequence_decider():
    turn = ''
    # The turn will be ramdomly decided with the random Module
    # if random number is a even number, x start first, else, o start first
    value = int(random.random() * 100)
    if value % 2 == 0:
        turn = "x"
    else:
        turn = "o"
    return turn


# turn switcher, at the end or beginning of each game, this function will be called
def turn_switcher():
    global turn  # making the variable global so we can update whose turn it is
    # if current turn is x, switch to o.
    if turn == "x":  # if ai_turn == turn <---****
        # call ai_choice()
        turn = "o"
        print(f"\n\n\n\t\t\tIt's {turn}'s turn:")
    else:  # if user_turn == turn<----****
        # call user_choice()
        turn = "x"
        print(f"\n\n\n\t\t\tIt's {turn}'s turn")


# depends on current turn, AI will decide the position to take
def ai_choice():
    # ai_turn = whatever sequence_decider() gave it
    ai_input = int(random.randint(1, 9))
    print(ai_input)
    if (current_game[str(ai_input)]) in ["o", "x"]:
        # return ai_turn
        ai_choice()
        # if current value of the current value is from 1 - 9, which means not taken yet

    else:
        current_game[str(ai_input)] = turn
        print(ai_input)
        print_board()
        # record each step of players, and write it into a txt file.
        global filename
        with open(filename, 'a') as file_object:
            file_object.write(f"{turn}:{str(ai_input)}\n")
        turn_switcher()  # after a user's turn, switch turn

        # return False


# function to ask user input and save it in current_game dict
def user_choice():  # pass turn in here
    # user_turn = whatever sequence_decider() gave it
    while True:
        try:
            user_input = int(input("\n\nEnter a position: "))  # Allows human player to input position number
            # TODO: either use exceptions or validate for user inputing string characters (it breaks int())
        except ValueError:
            print("Choose a position number between 1 & 9")
            user_choice()
            # I added this 5 lines below so the ai will keep working after any invalid input, other wise it won't work
            if is_finished():
                continue
            else:
                ai_choice()
                check_win()
        else:
            if user_input in range(1, 10):  # validate user input for 1 < num < 10

                if (current_game[str(user_input)]) in ["o", "x"]:
                    print("That position is already taken")
                    break
                # if current value of the current value is from 1 - 9, which means not taken yet
                else:
                    current_game[str(user_input)] = turn
                    print_board()
                    global filename
                    with open(filename, 'a') as file_object:
                        file_object.write(f"{turn}:{str(user_input)}\n")
                    turn_switcher()  # after a user's turn, switch turn

                    return False
            else:
                print("Choose a position number between 1 & 9")
                break


# current_game["7"] = turn("x or o")
# dictionary reflecting each step of the game in the backend
current_game = {
    '7': "7", '8': "8", '9': "9",
    '4': "4", '5': "5", '6': "6",
    '1': "1", '2': "2", '3': "3"
}


# after each game, this function will be called to reset the game board
def clear_current_game():
    global current_game
    current_game = {
        '7': "7", '8': "8", '9': "9",
        '4': "4", '5': "5", '6': "6",
        '1': "1", '2': "2", '3': "3"
    }


# input from user = current_game

# Create the Game Board:
def print_board():
    # clear = lambda: os.system('cls' if os.name=='nt' else 'clear')
    # clear()
    # print('\n\n\n')
    print(color.YELLOW + '\tTic Tac Toe Master\n')
    print('\t\t┌──┬──┬──┐')
    print('\t\t│' + current_game["7"] + ' │' + current_game["8"] + ' │' + current_game["9"] + ' │')
    print('\t\t├──┼──┼──┤')
    print('\t\t│' + current_game["4"] + ' │' + current_game["5"] + ' │' + current_game["6"] + ' │')
    print('\t\t├──┼──┼──┤')
    print('\t\t│' + current_game["1"] + ' │' + current_game["2"] + ' │' + current_game["3"] + ' │')
    print('\t\t└──┴──┴──┘')
    print(f"\n\n\nIt's {turn}'s turn:\n")


# used to choose b/w player /v player or /v computer
def mode_decider():
    try:
        game_mode = [1, 2]
        mode = int(input("1.Player vs Player\n2.Player vs Computer\n"))
    except ValueError:
        print("Please choose bettwen 1 and 2.")
        mode_decider()
    else:
        if mode not in game_mode:
            print("Please choose bettwen 1 and 2.")

        elif mode == 1:
            return "vsPlayer"
        else:
            return "vsComputer"


# check if game is finished, if it is finished, all values should be either o or x,
# once counter = 9, it means every position of the game board is marked as o or x, then game is finished
def is_finished():
    count = 0
    for k, v in current_game.items():
        if v in ["o", "x"]:
            count += 1
    if count == 9:
        return True


# function to ask player if they want to play it again or not.
def play_again():
    print("\n\n\n\n")
    decision = input(color.BOLD + "Play again.......................1\nExit..........Any key other than 1\n")
    print("\n\n\n\n")
    if decision == "1":
        clear_current_game()
        main()
    else:
        countdown()
        sys.exit()


def check_win():
    # clears the screen for posix['cls'] or Win['clear']
    clear_screen()

    # if any line, row, or diagonal have the same value(x or o)

    if (current_game['7'] == current_game["8"] == current_game["9"]
            or current_game['4'] == current_game["5"] == current_game["6"]
            or current_game['1'] == current_game["2"] == current_game["3"]
            or current_game['7'] == current_game["4"] == current_game["1"]
            or current_game['8'] == current_game["5"] == current_game["2"]
            or current_game['9'] == current_game["6"] == current_game["3"]
            or current_game['7'] == current_game["5"] == current_game["3"]
            or current_game['9'] == current_game["5"] == current_game["1"]):

        global turn
        if turn == "o":
            turn = "x"
        else:
            turn = "o"
        print(color.BOLD + f"\n\n\n\n\nFantastic, {turn} is the winner!\n\n\n")
        print_board()
        play_again()


    else:
        if is_finished():
            print(color.BOLD + f"\n\n\n\n\nOops, it's a tie!\n\n\n")
            print_board()
            play_again()


# function that counting down numbers when exiting the program
def countdown():
    clear_screen()
    t = 5
    print('Thank you for your participation, the program will be closed in 5 seconds. \n\n\n')
    while t > 0:
        print(t, end='\n')
        time.sleep(1)
        t -= 1
    print('Bye! \n \n \n \n \n')


# this function will clear the screen
def clear_screen():
    clear = lambda: os.system('cls' if os.name == 'nt' else 'clear')
    clear()


def main():
    # the main function that putting everything together, running the game
    while True:
        mode = mode_decider()
        while True:
            if mode == "vsPlayer":
                print_board()
                sequence_decider()
                user_choice()
                check_win()

            else:
                print_board()
                sequence_decider()
                if turn == "x":
                    user_choice()
                    check_win()
                else:
                    ai_choice()
                    check_win()


# global variables:
# the return of sequence_decider will be either o or x, which is randomly decided by the function
turn = sequence_decider()
filename = 'tictactoe.txt'
main()