def superdigit(num):
    num_string = str(num)
    suma = 0
    if len(num_string) == 1:
        suma += int(num_string[0])
        return suma
    else:
        for i in num_string:
            digits = len(num_string)
            return suma + int(i) + superdigit(num % (10 ** (digits - 1)))



if __name__ == '__main__':
    print(superdigit(9875))
    print(superdigit(29))
    print(superdigit(11))
    print(superdigit(2))

# Temporal Complexity: O(n)