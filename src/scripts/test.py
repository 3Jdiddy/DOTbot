import json
from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
from chatterbot.trainers import ChatterBotCorpusTrainer
from chatterbot.comparisons import LevenshteinDistance


# Uncomment the following lines to enable verbose logging
# import logging
# logging.basicConfig(level=logging.INFO)

# Create a new chat bot named Charlie
bot = ChatBot(
    'Charlie',
    storage_adapter='chatterbot.storage.SQLStorageAdapter',
    logic_adapters=[
        {
    'import_path': 'chatterbot.logic.BestMatch',
    'statement_comparison_function': 'chatterbot.comparisons.levenshtein_distance',
    'default_response': 'I am sorry, but I do not understand. Please double check to make sure everything is spelled correctly.',
    #'maximum_similarity_threshold': 0.80
        }
    ]
    
)

trainer = ListTrainer(bot)


data = json.load(open("questions.json", 'r'))

train = []

for row in data:
    train.append(row["question"])
    train.append(row["answer"])

trainer.train(train)



print("Welcome to the Aviation Information Station. Ask questions and get responses based on information from the US Department of Transportation: ")

while True:
    try:

        user_input = input()
        print("\n")

        bot_response = bot.get_response(user_input)

        print("DOTbot: ", bot_response)
        print("\n")

    # Press ctrl-c or ctrl-d on the keyboard to exit
    except (KeyboardInterrupt, EOFError, SystemExit):
        break