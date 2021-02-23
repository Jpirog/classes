a=[3,1,8,4,9]
n=4
sign=0
s=0
while s < n:
  u=s+1
  t=u
  while u < n:
    u=u+1
    if a[u] < a[t]:
      t=u
  tmp=a[s+1]
  a[s+1]=a[t]
  a[t]=tmp
  sign=1-sign
  s = s+1
print (sign)