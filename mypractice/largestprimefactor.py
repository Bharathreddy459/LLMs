import math

def largestprimefactor(n):
    maxpf = 1  
    while n % 2 == 0: 
        maxpf = 2
        n = n/2 
    for i in range(3,int(math.sqrt(n)+1),2):
        while n % i == 0: 
            maxpf = i 
            n = n / i 
    if n>2:
        maxpf=n
    return(int(maxpf))


# def isprime(num):
#     for i in range(2,int((num/2)+1)):
#         if num%i == 0:
#             return False
#     return True


print("Enter the input number :")
n= int(input ())

print(largestprimefactor(n))