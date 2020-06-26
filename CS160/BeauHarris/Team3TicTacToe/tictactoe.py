#Team Project for Team3
#Beau, Vincent, Derrel, Zach

#first we declare our global variables at the top as well as importing our random function
#the name fields will be used to store the users entered names and will be used in multiple functions
name1 = ""
name2 = ""
#the marks will be what are placed on the board for the corresponding player p1=x p2=o
mark1 = "X"
mark2 = "O"
#the board field is used to display the game board and will host the players marks as well
board = [1, 2, 3, 4, 5, 6, 7, 8, 9] 
#the turns field is used to count the number of plays in  a gae and to end the loops when the board is filled. 
turns = 9
#this is us importing our random generator
import random
from itertools import count
#used to determine if file exist
import os.path


#toggle function alternates players to allow differenet turns
def toggle(name): 
    global mark1
    global mark2
    global name1
    global name2
    if name2 == "Computer":
        if name == name1:
            PVAI(name2,mark2)
        else:
            PVAI(name1,mark1)
    else:
        if name == name1: 
            PVPgame(name2,mark2)
        elif name == name2:
            PVPgame(name1,mark1)
    
#function to check game board for winning pattern
def CheckBoard():
    
    global name1
    global name2
    #we will use a series of if else statements to discover who and how they have won
    #first the horizontals are checked
    if board[0]==board[1] and board[1]==board[2]:
        if board[0]==mark1:
            print("Congrats you have won "+name1)
            end_game(name1)
        else:
            print("Congrats you have won "+name2)
            end_game(name2)
    elif board[3]==board[4] and board[4]==board[5]:
        if board[3]==mark1:
            print("Congrats you have won "+name1)
            end_game(name1)
        else:
            print("Congrats you have won "+name2)
            end_game(name2)
    elif board[6]==board[7] and board[7]==board[8]:
        if board[6]==mark1:
            print("Congrats you have won "+name1)
            end_game(name1)
        else:
            print("Congrats you have won "+name2)
            end_game(name2)
#next we will run our verticcal checks  
    elif board[0]==board[3] and board[3]==board[6]:
        if board[0]==mark1:
            print("Congrats you have won "+name1)
            end_game(name1)
        else:
            print("Congrats you have won "+name2)
            end_game(name2)
    elif board[1]==board[4] and board[4]==board[7]:
        if board[1]==mark1:
            print("Congrats you have won "+name1)
            end_game(name1)
        else:
            print("Congrats you have won "+name2)
            end_game(name2)
    elif board[2]==board[5] and board[5]==board[8]:
        if board[2]==mark1:
            print("Congrats you have won "+name1)
            end_game(name1)
        else:
            print("Congrats you have won "+name2)
            end_game(name2)          
#and last we will check our horizontals
    elif board[0]==board[4] and board[4]==board[8]:
        if board[0]==mark1:
            print("Congrats you have won "+name1)
            end_game(name1)
        else:
            print("Congrats you have won "+name2)
            end_game(name2)
    elif board[2]==board[4] and board[4]==board[6]:
        if board[2]==mark1:
            print("Congrats you have won "+name1)
            end_game(name1)
        else:
            print("Congrats you have won "+name2)
            end_game(name2)
#pvp mnu allows players to enter their names to personalize game and decides who goes first
def menu(pchoice,random):
    global name1
    global name2
    print(str(board[0])+"|"+str(board[1])+"|"+str(board[2])+"\n"+str(board[3])+"|"+str(board[4])+"|"+str(board[5])+"\n"+str(board[6])+"|"+str(board[7])+"|"+str(board[8]))
    if pchoice == "1":
            #taking players names to prsonalize experience
        print("welcome players! First player enter your name and hit enter.")
        name1 = input()
        print("welcome players! Second player enter your name and hit enter.")
        name2 = input()

        insert_file_head(name1, name2)
    #evaluatign random number to see which player goes first
        if random == 1:
            print("congrats!"+name1+"you get to go first!")
            PVPgame(name1,mark1)
        else:
            print("congrats!"+name2+"you get to go first!")
            PVPgame(name2,mark2)
    else:
        print("welcome player! First player enter your name and hit enter.")
        name1 = input()
        name2 = "Computer"

        insert_file_head(name1, name2)
        if random == 1:
            print("Player will go first!")
            PVAI(name1,mark1)
        else:
            print("Computer will go first!")
            PVAI(name2,mark2)


#game action
def PVPgame(name,mark):
    global turns
     #list represents the board
    #This count is the moves in a game, it counts down every time a player makes a move
    print("To make a play type in the number corresponding to the spot on the board you wish to claim.")
    #this loop is the "game" action
    while turns > 0:
        playerplay(name,mark)
        turns -=1        
        CheckBoard() 
         #once check function is done code will return here and toggle function will be called 
        toggle(name)
    print("Bust! no winner this time!")

def playerplay(name,mark):
    print(name +" choose your play") 
    userchoice = int(input())-1
    if userchoice not in range(0,10):
        print("Thats not an option!")
        playerplay(name,mark)
    #Prints the choice to output file
    print_to_file(mark, userchoice)
    #players choose their number to place their choice and the loop replaces the int in the list with a string of their mark
    for i in range(len(board)):
        if i == userchoice:
            board[i]=mark
            print(str(board[0])+"|"+str(board[1])+"|"+str(board[2])+"\n"+str(board[3])+"|"+str(board[4])+"|"+str(board[5])+"\n"+str(board[6])+"|"+str(board[7])+"|"+str(board[8]))               
            break

def computerplay(mark):    
    choiceavail = False
    #This if statement looks to see if the current player is the computer or the player
    print("Computer plays!")
    #this nested whiel loop is used as a flag to continue looping through options until the coputer finds on that is viabe and available
    while choiceavail is False:
        #the computer will use a random number generator and pick numbers, these will be checked against the board to see if the number poistion is available to play
        cchoice = random.randint(1,10)
        #Prints the choice to output file
        print_to_file(mark, cchoice)
        for i in board:
            if cchoice == i:
                board[cchoice-1]=mark 
                print(str(board[0])+"|"+str(board[1])+"|"+str(board[2])+"\n"+str(board[3])+"|"+str(board[4])+"|"+str(board[5])+"\n"+str(board[6])+"|"+str(board[7])+"|"+str(board[8]))
                choiceavail = True
    #print(str(board[0])+"|"+str(board[1])+"|"+str(board[2])+"\n"+str(board[3])+"|"+str(board[4])+"|"+str(board[5])+"\n"+str(board[6])+"|"+str(board[7])+"|"+str(board[8]))


def PVAI(name,mark):
    global turns
    #the pvai function contains the actions for the user vs. computer 
    while turns > 0:
        #the loop will only allow turns to continue as long as their is open slots on the board by tracking the number of turns
        if name == "Computer":
            computerplay(mark)
            turns-=1
        else:
            playerplay(name,mark)
            turns-=1 
        CheckBoard()
        toggle(name)
    print("Bust! no winner this time.")

#this function will be the entry point to the game loop 
def starting_up():
#start of game welcome players/ ask what kind of game they wih to play
    print("Hello! welcome to tictactoe.\n""would you like to play vs a player or vs AI?\n""select 1 for pvp or 2 for vs AI")
    usergamechoice=input()
#random number generator to pick who goes first 
    rdom = random.randint(1,2)
#evaluating the userchoice to decide which game they want to play 
    menu(usergamechoice,rdom)

#Function will insert game and player info to file
def insert_file_head(playerName1, playerName2):
    """Function will receive player data, game number, and add to file header"""
    def get_game_num():
        """Function gets the last game number and updates output file to current game number"""
        #Loop through file to get to last line in text file
        with open(filename, 'r') as file_object:
            LINES = file_object.readlines()
            #check to see if file is empty
            if not LINES:
                return 0
            else:
                for LINE in LINES:
                    pass                #Skip all lines except last
                char = LINE[:1]         #Grab first character on line, last game  number
                #return integer representing game number
                return int(char)
    
    #checks if output file already exist, if not creates file
    if not os.path.isfile(filename):
        f = open(filename, 'w+')
        f.close()
    
    #increment to next game number
    gameNum = get_game_num() + 1
    #add file header info with player names and game number
    with open(filename, 'a') as file_object:
        file_object.write(str(gameNum) + " " + playerName1 + " vs " + playerName2 + " - ")

def end_game(winner):
    """Function will print to file winner of game, and add cleanup"""
    with open(filename, 'a') as file_object:
        file_object.write(f" Winner: {winner}\n")
    exit()


#Function will print player moves to file
def print_to_file(value, position):
    """Function receives game move data of filename, position, and value and prints to file..
    (X:5, O:2, etc.)"""
    with open(filename, 'a') as file_object:
        file_object.write(value + ":" + str(position) + " ")

filename = "tictactoe.txt"

#we will begin the tictctoe game by calling the opening function
starting_up()