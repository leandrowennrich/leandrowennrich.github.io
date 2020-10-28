"""
#Impacta apostila lógica de programação pagina 24
print("hello world")
print("hello", "world")
print(3)
print(3.0)
print(2 + 3)
print(2.0 + 3.0)
print("2" + "3")
print("1 + 3 =", 2 + 3)
print(2 * 3)
print(2 ** 3)
print(2 / 3)
type(3)
type("tipo inteiro")
type("tipo string")
type(3.0)
type(4 / 2)
type("4/2")
type("3.0")
"""
"""
# Exercício página 24
status = True
input("Bem-Vindo ao Programa de calculo de aumento!!!")
while status:
    salário = float(input("Digite o Salário: "))
    aumento = float(input("Digite o Percentual de aumento: "))
    porcentagem = aumento / 100
    valor_final = salário * porcentagem
    print("Seu aumento será de: R$", valor_final)
    repeat = True
    while repeat:
        ask_repeat = input("Deseja continuar? Y/N ")
        if ask_repeat == "N":
            print("Obrigado!!")
            repeat = False
            status = False
        elif ask_repeat == "Y":
            repeat = False
            status = True
        else:
            print("Digite um valor válido")
"""
"""
# Exercício 1 Pagina 25
input("Bem-Vindo ao programa de calculo de Valor de Água")
salario = float(input("Digite o Salário mínimo "))
qtde_agua = int(input("Quantos Litros de Água foram gastos? "))
valor_litro = salario * 0.02 / 1000
valor_conta = qtde_agua * valor_litro
print("O valor a ser pago: R$", valor_conta)
"""
"""
v1 = input()
v2 = input()

v3 = v2
v2 = v1
v1 = v3

print(v1, v2)
"""

a = int(input("Escreva uma Número: "))
b = int(input("Escreva outro Número: "))
sum = a + b
print(f"A soma é: {sum}")