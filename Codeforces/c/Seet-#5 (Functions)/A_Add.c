#include <stdio.h>

int add(int a, int b)
{
    return a + b;
}

int main()
{
    int x, y;
    scanf("%d %d", &x, &y);

    int sum = add(x, y);
    printf("%d", sum);
    return 0;
}