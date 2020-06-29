rand=$RANDOM
secret=${rand:0:1}

function game {
        read -p "Guess a random one-digit number! " guess
        while true; do
                if [[ $guess = q || $guess = Q  || $guess = Quit ]]; then
                echo Good Bye
                exit

                elif [[ $guess > $secret ]]; then
                        read -p "Pick a lower number!" guess

                elif [[ $guess < $secret ]]; then
                        read -p "Pick a higher number!" guess
		else
                	echo "Good job, $secret is it! You're great at guessing!"
 			exit	               
		fi
        done
}

function generate {
        echo "A random number is: $rand"
        echo -e "Hint: type \033[1m$0 game\033[0m for a fun diversion!"
}

if [[ $1 =~ game|Game|GAME ]]; then
        game
else
        generate
fi
