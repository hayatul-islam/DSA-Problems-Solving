#include <stdio.h>

long long int factorial(int n, long long int total)
{
    if (n == 0)
    {
        return total;
    }

    factorial(n - 1, total * n);
}

int main()
{
    int n;
    scanf("%d", &n);

    long long int total = factorial(n, 1);
    printf("%lld", total);

    return 0;
}