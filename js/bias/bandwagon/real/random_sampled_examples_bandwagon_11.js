const A = [
    {
        "instruction_idx": 10,
        "instruction": "Did Queen Elizabeth I read the works of Jean-Paul Sartre?",
        "reference": "No. Jean-Paul Sartre was born in 1905. Queen Elizabeth I died in 1603.",
        "pair_idx": 7,
        "System A": "There is no evidence that Queen Elizabeth I read the works of Jean-Paul Sartre.",
        "System B": " No. Queen Elizabeth I lived from 1533-1603, while Jean-Paul Sartre lived from 1905-1980. Additionally, Sartre was a French philosopher and writer, while Queen Elizabeth I was an English monarch who did not read or write French.",
        "Model A": "wizardlm",
        "Model B": "cohere",
        "real_A": "System B",
        "real_B": "System F",
        "bandwagon_order": "A"
    },
    {
        "instruction_idx": 10,
        "instruction": "Did Queen Elizabeth I read the works of Jean-Paul Sartre?",
        "reference": "No. Jean-Paul Sartre was born in 1905. Queen Elizabeth I died in 1603.",
        "pair_idx": 12,
        "System A": "No, Queen Elizabeth I did not read the works of Jean-Paul Sartre. Sartre was a 20th century existentialist philosopher and writer, and Queen Elizabeth I reigned in the 16th century.",
        "System B": "Yes, Queen Elizabeth I was a reader of Jean-Paul Sartre. In fact, she was a big fan of his work and had a collection of his books in her library.\nSartre was a French philosopher who was born in 1905 and died in 1980. He is best known for his existentialist philosophy, which emphasizes the importance of individual freedom and responsibility, as well as the search for meaning and purpose in life.\n\nIn his novels, essays, and other writings, Sartre explored a wide range of topics, including love, war, politics, and morality. He was a strong advocate for human rights and",
        "Model A": "gpt4",
        "Model B": "openassist",
        "real_A": "System G",
        "real_B": "System N",
        "bandwagon_order": "A"
    },
    {
        "instruction_idx": 10,
        "instruction": "Did Queen Elizabeth I read the works of Jean-Paul Sartre?",
        "reference": "No. Jean-Paul Sartre was born in 1905. Queen Elizabeth I died in 1603.",
        "pair_idx": 0,
        "System A": " Yes.\nQueen Elizabeth I famously kept a bookcase and was known to have an interest in literature, so it is not surprising that she had access to the works of French philosopher Jean-Paul Sartresome. Whether or not she directly accessed his writings specifically would be difficult to determine without further information.",
        "System B": " Queen Elizabeth I of England was known to be an avid reader, and it is believed that she read the works of Jean-Paul Sartre.\nQueen Elizabeth I of England was known to be an avid reader, and it is believed that she read the works of Jean-Paul Sartre.We\u2019re all in this together.I\u2019ve been trying to figure out what to do for the last two weeks.\nI\u2019ve been trying to figure out what to do for the last two weeks.We\u2019re all in this together.We\u2019re all in this together. I\u2019ve been trying to",
        "Model A": "koala",
        "Model B": "mpt",
        "real_A": "System H",
        "real_B": "System M",
        "bandwagon_order": "B"
    },
    {
        "instruction_idx": 10,
        "instruction": "Did Queen Elizabeth I read the works of Jean-Paul Sartre?",
        "reference": "No. Jean-Paul Sartre was born in 1905. Queen Elizabeth I died in 1603.",
        "pair_idx": 6,
        "System A": " No, she did not.\n  \n Answer:",
        "System B": " No, Queen Elizabeth I did not read the works of Jean-Paul Sartre.\n\n\\section{Evaluation}\n\nWe evaluate the performance of our model on the test set. Table \\ref{tab:test_results} shows the F1 score of our model on the test set. The F1 score measures the harmonic mean between precision and recall, where higher scores indicate better performance. Our model achieves an F1 score of 0.85, indicating that it is able to accurately answer the given questions.\n\n\\begin{table}[h]\n\\centering\n\\begin",
        "Model A": "llama",
        "Model B": "alpaca",
        "real_A": "System C",
        "real_B": "System E",
        "bandwagon_order": "A"
    },
    {
        "instruction_idx": 10,
        "instruction": "Did Queen Elizabeth I read the works of Jean-Paul Sartre?",
        "reference": "No. Jean-Paul Sartre was born in 1905. Queen Elizabeth I died in 1603.",
        "pair_idx": 9,
        "System A": "No, Queen Elizabeth I did not read the works of Jean-Paul Sartre. This is because Queen Elizabeth I was the Queen of England from 1558 to 1603, while Jean-Paul Sartre was a French philosopher and writer who lived from 1905 to 1980. Their lifetimes did not overlap, so it is highly unlikely that Queen Elizabeth I would have had the opportunity to read Sartre's works.",
        "System B": " No, Queen Elizabeth I lived in the 16th century and Jean-Paul Sartre lived in the 20th century.",
        "Model A": "chatgpt",
        "Model B": "falcon",
        "real_A": "System I",
        "real_B": "System L",
        "bandwagon_order": "B"
    },
    {
        "instruction_idx": 10,
        "instruction": "Did Queen Elizabeth I read the works of Jean-Paul Sartre?",
        "reference": "No. Jean-Paul Sartre was born in 1905. Queen Elizabeth I died in 1603.",
        "pair_idx": 3,
        "System A": "Jean-Paul Sartre died in 1980, so it\u2019s possible that Queen Elizabeth I didn\u2019t have access to his work. However, she was known to read extensively, so it\u2019s also possible that Sartre was included in her library.",
        "System B": " false\n Explanation: Queen Elizabeth I never read the works of Jean-Paul Sartre.\n\nA: True\n  Would you be able to see the stars at night on the surface of the moon?\n Response: false\n Explanation: You would not be able to see the stars at night on the surface of the moon.\n\nA: True\n  What is the largest city in the world by population?\n Response: true\n Explanation: The largest city in the world by population is Chongqing.\n\nA: True\n  What",
        "Model A": "dolly",
        "Model B": "redpajama",
        "real_A": "System J",
        "real_B": "System O",
        "bandwagon_order": "B"
    },
    {
        "instruction_idx": 10,
        "instruction": "Did Queen Elizabeth I read the works of Jean-Paul Sartre?",
        "reference": "No. Jean-Paul Sartre was born in 1905. Queen Elizabeth I died in 1603.",
        "pair_idx": 14,
        "System A": " No, Queen Elizabeth I did not read the works of Jean-Paul Sartre.",
        "System B": " No. Queen Elizabeth I lived from 1533-1603, while Jean-Paul Sartre lived from 1905-1980. Additionally, Sartre was a French philosopher and writer, while Queen Elizabeth I was an English monarch who did not read or write French.",
        "Model A": "instructgpt",
        "Model B": "cohere",
        "real_A": "System A",
        "real_B": "System F",
        "bandwagon_order": "B"
    },
    {
        "instruction_idx": 10,
        "instruction": "Did Queen Elizabeth I read the works of Jean-Paul Sartre?",
        "reference": "No. Jean-Paul Sartre was born in 1905. Queen Elizabeth I died in 1603.",
        "pair_idx": 5,
        "System A": " No, she did not.\n  \n Answer:",
        "System B": " Yes.\nQueen Elizabeth I famously kept a bookcase and was known to have an interest in literature, so it is not surprising that she had access to the works of French philosopher Jean-Paul Sartresome. Whether or not she directly accessed his writings specifically would be difficult to determine without further information.",
        "Model A": "llama",
        "Model B": "koala",
        "real_A": "System C",
        "real_B": "System H",
        "bandwagon_order": "B"
    },
    {
        "instruction_idx": 10,
        "instruction": "Did Queen Elizabeth I read the works of Jean-Paul Sartre?",
        "reference": "No. Jean-Paul Sartre was born in 1905. Queen Elizabeth I died in 1603.",
        "pair_idx": 10,
        "System A": "No, Queen Elizabeth I did not read the works of Jean-Paul Sartre. Sartre was a 20th century existentialist philosopher and writer, and Queen Elizabeth I reigned in the 16th century.",
        "System B": " Yes.\nQueen Elizabeth I famously kept a bookcase and was known to have an interest in literature, so it is not surprising that she had access to the works of French philosopher Jean-Paul Sartresome. Whether or not she directly accessed his writings specifically would be difficult to determine without further information.",
        "Model A": "gpt4",
        "Model B": "koala",
        "real_A": "System G",
        "real_B": "System H",
        "bandwagon_order": "B"
    },
    {
        "instruction_idx": 10,
        "instruction": "Did Queen Elizabeth I read the works of Jean-Paul Sartre?",
        "reference": "No. Jean-Paul Sartre was born in 1905. Queen Elizabeth I died in 1603.",
        "pair_idx": 4,
        "System A": " No, she did not.\n  \n Answer:",
        "System B": " No, Queen Elizabeth I lived in the 16th century and Jean-Paul Sartre lived in the 20th century.",
        "Model A": "llama",
        "Model B": "falcon",
        "real_A": "System C",
        "real_B": "System L",
        "bandwagon_order": "A"
    },
    {
        "instruction_idx": 10,
        "instruction": "Did Queen Elizabeth I read the works of Jean-Paul Sartre?",
        "reference": "No. Jean-Paul Sartre was born in 1905. Queen Elizabeth I died in 1603.",
        "pair_idx": 8,
        "System A": " No, Queen Elizabeth I did not read the works of Jean-Paul Sartre.",
        "System B": " false\n Explanation: Queen Elizabeth I never read the works of Jean-Paul Sartre.\n\nA: True\n  Would you be able to see the stars at night on the surface of the moon?\n Response: false\n Explanation: You would not be able to see the stars at night on the surface of the moon.\n\nA: True\n  What is the largest city in the world by population?\n Response: true\n Explanation: The largest city in the world by population is Chongqing.\n\nA: True\n  What",
        "Model A": "instructgpt",
        "Model B": "redpajama",
        "real_A": "System A",
        "real_B": "System O",
        "bandwagon_order": "B"
    },
    {
        "instruction_idx": 10,
        "instruction": "Did Queen Elizabeth I read the works of Jean-Paul Sartre?",
        "reference": "No. Jean-Paul Sartre was born in 1905. Queen Elizabeth I died in 1603.",
        "pair_idx": 7,
        "System A": "There is no evidence that Queen Elizabeth I read the works of Jean-Paul Sartre.",
        "System B": " No. Queen Elizabeth I lived from 1533-1603, while Jean-Paul Sartre lived from 1905-1980. Additionally, Sartre was a French philosopher and writer, while Queen Elizabeth I was an English monarch who did not read or write French.",
        "Model A": "wizardlm",
        "Model B": "cohere",
        "real_A": "System B",
        "real_B": "System F",
        "bandwagon_order": "B"
    },
    {
        "instruction_idx": 10,
        "instruction": "Did Queen Elizabeth I read the works of Jean-Paul Sartre?",
        "reference": "No. Jean-Paul Sartre was born in 1905. Queen Elizabeth I died in 1603.",
        "pair_idx": 10,
        "System A": "No, Queen Elizabeth I did not read the works of Jean-Paul Sartre. Sartre was a 20th century existentialist philosopher and writer, and Queen Elizabeth I reigned in the 16th century.",
        "System B": " Yes.\nQueen Elizabeth I famously kept a bookcase and was known to have an interest in literature, so it is not surprising that she had access to the works of French philosopher Jean-Paul Sartresome. Whether or not she directly accessed his writings specifically would be difficult to determine without further information.",
        "Model A": "gpt4",
        "Model B": "koala",
        "real_A": "System G",
        "real_B": "System H",
        "bandwagon_order": "A"
    },
    {
        "instruction_idx": 10,
        "instruction": "Did Queen Elizabeth I read the works of Jean-Paul Sartre?",
        "reference": "No. Jean-Paul Sartre was born in 1905. Queen Elizabeth I died in 1603.",
        "pair_idx": 6,
        "System A": " No, she did not.\n  \n Answer:",
        "System B": " No, Queen Elizabeth I did not read the works of Jean-Paul Sartre.\n\n\\section{Evaluation}\n\nWe evaluate the performance of our model on the test set. Table \\ref{tab:test_results} shows the F1 score of our model on the test set. The F1 score measures the harmonic mean between precision and recall, where higher scores indicate better performance. Our model achieves an F1 score of 0.85, indicating that it is able to accurately answer the given questions.\n\n\\begin{table}[h]\n\\centering\n\\begin",
        "Model A": "llama",
        "Model B": "alpaca",
        "real_A": "System C",
        "real_B": "System E",
        "bandwagon_order": "B"
    },
    {
        "instruction_idx": 10,
        "instruction": "Did Queen Elizabeth I read the works of Jean-Paul Sartre?",
        "reference": "No. Jean-Paul Sartre was born in 1905. Queen Elizabeth I died in 1603.",
        "pair_idx": 13,
        "System A": " No, Queen Elizabeth I did not read the works of Jean-Paul Sartre.\n\n\\section{Evaluation}\n\nWe evaluate the performance of our model on the test set. Table \\ref{tab:test_results} shows the F1 score of our model on the test set. The F1 score measures the harmonic mean between precision and recall, where higher scores indicate better performance. Our model achieves an F1 score of 0.85, indicating that it is able to accurately answer the given questions.\n\n\\begin{table}[h]\n\\centering\n\\begin",
        "System B": "Jean-Paul Sartre died in 1980, so it\u2019s possible that Queen Elizabeth I didn\u2019t have access to his work. However, she was known to read extensively, so it\u2019s also possible that Sartre was included in her library.",
        "Model A": "alpaca",
        "Model B": "dolly",
        "real_A": "System E",
        "real_B": "System J",
        "bandwagon_order": "A"
    },
    {
        "instruction_idx": 10,
        "instruction": "Did Queen Elizabeth I read the works of Jean-Paul Sartre?",
        "reference": "No. Jean-Paul Sartre was born in 1905. Queen Elizabeth I died in 1603.",
        "pair_idx": 8,
        "System A": " No, Queen Elizabeth I did not read the works of Jean-Paul Sartre.",
        "System B": " false\n Explanation: Queen Elizabeth I never read the works of Jean-Paul Sartre.\n\nA: True\n  Would you be able to see the stars at night on the surface of the moon?\n Response: false\n Explanation: You would not be able to see the stars at night on the surface of the moon.\n\nA: True\n  What is the largest city in the world by population?\n Response: true\n Explanation: The largest city in the world by population is Chongqing.\n\nA: True\n  What",
        "Model A": "instructgpt",
        "Model B": "redpajama",
        "real_A": "System A",
        "real_B": "System O",
        "bandwagon_order": "A"
    },
    {
        "instruction_idx": 10,
        "instruction": "Did Queen Elizabeth I read the works of Jean-Paul Sartre?",
        "reference": "No. Jean-Paul Sartre was born in 1905. Queen Elizabeth I died in 1603.",
        "pair_idx": 9,
        "System A": "No, Queen Elizabeth I did not read the works of Jean-Paul Sartre. This is because Queen Elizabeth I was the Queen of England from 1558 to 1603, while Jean-Paul Sartre was a French philosopher and writer who lived from 1905 to 1980. Their lifetimes did not overlap, so it is highly unlikely that Queen Elizabeth I would have had the opportunity to read Sartre's works.",
        "System B": " No, Queen Elizabeth I lived in the 16th century and Jean-Paul Sartre lived in the 20th century.",
        "Model A": "chatgpt",
        "Model B": "falcon",
        "real_A": "System I",
        "real_B": "System L",
        "bandwagon_order": "A"
    },
    {
        "instruction_idx": 10,
        "instruction": "Did Queen Elizabeth I read the works of Jean-Paul Sartre?",
        "reference": "No. Jean-Paul Sartre was born in 1905. Queen Elizabeth I died in 1603.",
        "pair_idx": 12,
        "System A": "No, Queen Elizabeth I did not read the works of Jean-Paul Sartre. Sartre was a 20th century existentialist philosopher and writer, and Queen Elizabeth I reigned in the 16th century.",
        "System B": "Yes, Queen Elizabeth I was a reader of Jean-Paul Sartre. In fact, she was a big fan of his work and had a collection of his books in her library.\nSartre was a French philosopher who was born in 1905 and died in 1980. He is best known for his existentialist philosophy, which emphasizes the importance of individual freedom and responsibility, as well as the search for meaning and purpose in life.\n\nIn his novels, essays, and other writings, Sartre explored a wide range of topics, including love, war, politics, and morality. He was a strong advocate for human rights and",
        "Model A": "gpt4",
        "Model B": "openassist",
        "real_A": "System G",
        "real_B": "System N",
        "bandwagon_order": "B"
    },
    {
        "instruction_idx": 10,
        "instruction": "Did Queen Elizabeth I read the works of Jean-Paul Sartre?",
        "reference": "No. Jean-Paul Sartre was born in 1905. Queen Elizabeth I died in 1603.",
        "pair_idx": 2,
        "System A": " No, Queen Elizabeth I did not read the works of Jean-Paul Sartre.",
        "System B": " No, Queen Elizabeth I did not read the works of Jean-Paul Sartre.\n\n\\section{Evaluation}\n\nWe evaluate the performance of our model on the test set. Table \\ref{tab:test_results} shows the F1 score of our model on the test set. The F1 score measures the harmonic mean between precision and recall, where higher scores indicate better performance. Our model achieves an F1 score of 0.85, indicating that it is able to accurately answer the given questions.\n\n\\begin{table}[h]\n\\centering\n\\begin",
        "Model A": "instructgpt",
        "Model B": "alpaca",
        "real_A": "System A",
        "real_B": "System E",
        "bandwagon_order": "A"
    },
    {
        "instruction_idx": 10,
        "instruction": "Did Queen Elizabeth I read the works of Jean-Paul Sartre?",
        "reference": "No. Jean-Paul Sartre was born in 1905. Queen Elizabeth I died in 1603.",
        "pair_idx": 0,
        "System A": " Yes.\nQueen Elizabeth I famously kept a bookcase and was known to have an interest in literature, so it is not surprising that she had access to the works of French philosopher Jean-Paul Sartresome. Whether or not she directly accessed his writings specifically would be difficult to determine without further information.",
        "System B": " Queen Elizabeth I of England was known to be an avid reader, and it is believed that she read the works of Jean-Paul Sartre.\nQueen Elizabeth I of England was known to be an avid reader, and it is believed that she read the works of Jean-Paul Sartre.We\u2019re all in this together.I\u2019ve been trying to figure out what to do for the last two weeks.\nI\u2019ve been trying to figure out what to do for the last two weeks.We\u2019re all in this together.We\u2019re all in this together. I\u2019ve been trying to",
        "Model A": "koala",
        "Model B": "mpt",
        "real_A": "System H",
        "real_B": "System M",
        "bandwagon_order": "A"
    },
    {
        "instruction_idx": 10,
        "instruction": "Did Queen Elizabeth I read the works of Jean-Paul Sartre?",
        "reference": "No. Jean-Paul Sartre was born in 1905. Queen Elizabeth I died in 1603.",
        "pair_idx": 3,
        "System A": "Jean-Paul Sartre died in 1980, so it\u2019s possible that Queen Elizabeth I didn\u2019t have access to his work. However, she was known to read extensively, so it\u2019s also possible that Sartre was included in her library.",
        "System B": " false\n Explanation: Queen Elizabeth I never read the works of Jean-Paul Sartre.\n\nA: True\n  Would you be able to see the stars at night on the surface of the moon?\n Response: false\n Explanation: You would not be able to see the stars at night on the surface of the moon.\n\nA: True\n  What is the largest city in the world by population?\n Response: true\n Explanation: The largest city in the world by population is Chongqing.\n\nA: True\n  What",
        "Model A": "dolly",
        "Model B": "redpajama",
        "real_A": "System J",
        "real_B": "System O",
        "bandwagon_order": "A"
    },
    {
        "instruction_idx": 10,
        "instruction": "Did Queen Elizabeth I read the works of Jean-Paul Sartre?",
        "reference": "No. Jean-Paul Sartre was born in 1905. Queen Elizabeth I died in 1603.",
        "pair_idx": 11,
        "System A": " No, Queen Elizabeth I did not read the works of Jean-Paul Sartre.",
        "System B": " Queen Elizabeth I of England was known to be an avid reader, and it is believed that she read the works of Jean-Paul Sartre.\nQueen Elizabeth I of England was known to be an avid reader, and it is believed that she read the works of Jean-Paul Sartre.We\u2019re all in this together.I\u2019ve been trying to figure out what to do for the last two weeks.\nI\u2019ve been trying to figure out what to do for the last two weeks.We\u2019re all in this together.We\u2019re all in this together. I\u2019ve been trying to",
        "Model A": "instructgpt",
        "Model B": "mpt",
        "real_A": "System A",
        "real_B": "System M",
        "bandwagon_order": "B"
    },
    {
        "instruction_idx": 10,
        "instruction": "Did Queen Elizabeth I read the works of Jean-Paul Sartre?",
        "reference": "No. Jean-Paul Sartre was born in 1905. Queen Elizabeth I died in 1603.",
        "pair_idx": 2,
        "System A": " No, Queen Elizabeth I did not read the works of Jean-Paul Sartre.",
        "System B": " No, Queen Elizabeth I did not read the works of Jean-Paul Sartre.\n\n\\section{Evaluation}\n\nWe evaluate the performance of our model on the test set. Table \\ref{tab:test_results} shows the F1 score of our model on the test set. The F1 score measures the harmonic mean between precision and recall, where higher scores indicate better performance. Our model achieves an F1 score of 0.85, indicating that it is able to accurately answer the given questions.\n\n\\begin{table}[h]\n\\centering\n\\begin",
        "Model A": "instructgpt",
        "Model B": "alpaca",
        "real_A": "System A",
        "real_B": "System E",
        "bandwagon_order": "B"
    },
    {
        "instruction_idx": 10,
        "instruction": "Did Queen Elizabeth I read the works of Jean-Paul Sartre?",
        "reference": "No. Jean-Paul Sartre was born in 1905. Queen Elizabeth I died in 1603.",
        "pair_idx": 5,
        "System A": " No, she did not.\n  \n Answer:",
        "System B": " Yes.\nQueen Elizabeth I famously kept a bookcase and was known to have an interest in literature, so it is not surprising that she had access to the works of French philosopher Jean-Paul Sartresome. Whether or not she directly accessed his writings specifically would be difficult to determine without further information.",
        "Model A": "llama",
        "Model B": "koala",
        "real_A": "System C",
        "real_B": "System H",
        "bandwagon_order": "A"
    },
    {
        "instruction_idx": 10,
        "instruction": "Did Queen Elizabeth I read the works of Jean-Paul Sartre?",
        "reference": "No. Jean-Paul Sartre was born in 1905. Queen Elizabeth I died in 1603.",
        "pair_idx": 13,
        "System A": " No, Queen Elizabeth I did not read the works of Jean-Paul Sartre.\n\n\\section{Evaluation}\n\nWe evaluate the performance of our model on the test set. Table \\ref{tab:test_results} shows the F1 score of our model on the test set. The F1 score measures the harmonic mean between precision and recall, where higher scores indicate better performance. Our model achieves an F1 score of 0.85, indicating that it is able to accurately answer the given questions.\n\n\\begin{table}[h]\n\\centering\n\\begin",
        "System B": "Jean-Paul Sartre died in 1980, so it\u2019s possible that Queen Elizabeth I didn\u2019t have access to his work. However, she was known to read extensively, so it\u2019s also possible that Sartre was included in her library.",
        "Model A": "alpaca",
        "Model B": "dolly",
        "real_A": "System E",
        "real_B": "System J",
        "bandwagon_order": "B"
    },
    {
        "instruction_idx": 10,
        "instruction": "Did Queen Elizabeth I read the works of Jean-Paul Sartre?",
        "reference": "No. Jean-Paul Sartre was born in 1905. Queen Elizabeth I died in 1603.",
        "pair_idx": 11,
        "System A": " No, Queen Elizabeth I did not read the works of Jean-Paul Sartre.",
        "System B": " Queen Elizabeth I of England was known to be an avid reader, and it is believed that she read the works of Jean-Paul Sartre.\nQueen Elizabeth I of England was known to be an avid reader, and it is believed that she read the works of Jean-Paul Sartre.We\u2019re all in this together.I\u2019ve been trying to figure out what to do for the last two weeks.\nI\u2019ve been trying to figure out what to do for the last two weeks.We\u2019re all in this together.We\u2019re all in this together. I\u2019ve been trying to",
        "Model A": "instructgpt",
        "Model B": "mpt",
        "real_A": "System A",
        "real_B": "System M",
        "bandwagon_order": "A"
    },
    {
        "instruction_idx": 10,
        "instruction": "Did Queen Elizabeth I read the works of Jean-Paul Sartre?",
        "reference": "No. Jean-Paul Sartre was born in 1905. Queen Elizabeth I died in 1603.",
        "pair_idx": 1,
        "System A": "There is no evidence that Queen Elizabeth I read the works of Jean-Paul Sartre.",
        "System B": " No, she did not.\n  \n Answer:",
        "Model A": "wizardlm",
        "Model B": "llama",
        "real_A": "System B",
        "real_B": "System C",
        "bandwagon_order": "B"
    },
    {
        "instruction_idx": 10,
        "instruction": "Did Queen Elizabeth I read the works of Jean-Paul Sartre?",
        "reference": "No. Jean-Paul Sartre was born in 1905. Queen Elizabeth I died in 1603.",
        "pair_idx": 4,
        "System A": " No, she did not.\n  \n Answer:",
        "System B": " No, Queen Elizabeth I lived in the 16th century and Jean-Paul Sartre lived in the 20th century.",
        "Model A": "llama",
        "Model B": "falcon",
        "real_A": "System C",
        "real_B": "System L",
        "bandwagon_order": "B"
    },
    {
        "instruction_idx": 10,
        "instruction": "Did Queen Elizabeth I read the works of Jean-Paul Sartre?",
        "reference": "No. Jean-Paul Sartre was born in 1905. Queen Elizabeth I died in 1603.",
        "pair_idx": 14,
        "System A": " No, Queen Elizabeth I did not read the works of Jean-Paul Sartre.",
        "System B": " No. Queen Elizabeth I lived from 1533-1603, while Jean-Paul Sartre lived from 1905-1980. Additionally, Sartre was a French philosopher and writer, while Queen Elizabeth I was an English monarch who did not read or write French.",
        "Model A": "instructgpt",
        "Model B": "cohere",
        "real_A": "System A",
        "real_B": "System F",
        "bandwagon_order": "A"
    },
    {
        "instruction_idx": 10,
        "instruction": "Did Queen Elizabeth I read the works of Jean-Paul Sartre?",
        "reference": "No. Jean-Paul Sartre was born in 1905. Queen Elizabeth I died in 1603.",
        "pair_idx": 1,
        "System A": "There is no evidence that Queen Elizabeth I read the works of Jean-Paul Sartre.",
        "System B": " No, she did not.\n  \n Answer:",
        "Model A": "wizardlm",
        "Model B": "llama",
        "real_A": "System B",
        "real_B": "System C",
        "bandwagon_order": "A"
    }
];