def superDigit(num):
    num_string = str(num)
    suma = 0
    if len(num_string) == 1:
        return num
    else:
        return superDigit(sumDigits(num))
        

def sumDigits(num):
    num_string = str(num)
    if len(num_string) == 1:
        return int(num_string[0])
    else:
        digits = len(num_string)
        return int(num_string[0]) + sumDigits(num % (10 ** (digits - 1)))  



if __name__ == '__main__':
    print(sumDigits(9875))
    print(sumDigits(29))
    print(sumDigits(11))
    print(sumDigits(2)) 
    print(f'SuperDigit: {superDigit(9875)}') 

# Temporal Complexity: O(n)
