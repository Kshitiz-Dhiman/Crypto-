import random 
import string

char = " "+ string.ascii_letters + string.digits + string.punctuation
char = list(char)
key = char.copy()
random.shuffle(key)
# ENCRYPT
plain_text = input("Enter a text to encrypt: ")
cipher_text = ""
for letter in plain_text:
    index = char.index(letter)
    cipher_text += key[index]

print(f"Original message: {plain_text}")
print(f"Encrypted  message: {cipher_text}")

#DECRYPT
cipher_text = input("Enter the text to decrypt: ")
plain_text = ""
for letter in cipher_text:
    index = key.index(letter)
    plain_text += char[index]

print(f"Encrypted  message: {cipher_text}")
print(f"Original message: {plain_text}")