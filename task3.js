const array = [1,3,4,2,3,1,4,5]
array.reduce((a, x) => a.includes(x) ? a : [...a, x], []).sort()
