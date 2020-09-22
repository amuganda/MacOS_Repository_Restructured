from twilio.rest import Client

client = Client("AC151##################", "dccn0pe##############")

#View Messages On List
for msg in client.messages.list():
    print(msg.body)

#Send A Message 
#msg = client.messages.create(
#    to="+44##########",
#    from_="+1##########",
#   body="Testing python script",
#)
#print(f"Your Message Has Been Sent, There Is No Delivery Receipt: {msg.sid}")

#Delete A Message
#for msg in client.messages.list():
#    print(f"Deleting Message {msg.body}")
#   msg.delete()
