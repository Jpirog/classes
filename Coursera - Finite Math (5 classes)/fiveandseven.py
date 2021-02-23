
def change(amount):
  if amount == 24:
    return [5, 5, 7, 7]
  if amount == 25:
    return [5, 5, 5, 5,5]
  if amount == 26:
    return [5, 7, 7, 7]
  if amount == 27:
    return [5, 5, 5, 5, 7]
  if amount == 28:
    return [7, 7, 7, 7]
  if amount == 29:
    return [5, 5, 5, 7, 7]
  if amount == 30:
    return [5, 5, 5, 5,5,5]
    
  return [7] + change(amount-7)    

nbr = 98
print (nbr, change(nbr))
    