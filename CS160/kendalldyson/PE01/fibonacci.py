N = int(input("Number of elements in Fibonacci Series, N, (N>=2) : "))

fibonacciSeries = [0,1]
last_element=str(fibonacciSeries.pop())

if N>2:
	for i in range(2, N):
		
		nextElement = fibonacciSeries[i-1] + fibonacciSeries[i-2]
		
		fibonacciSeries.append(nextElement)

print(last_element)