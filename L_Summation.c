#include <stdio.h>

long long int summation(int a[], int n, long long int total, int i)
{

    if (n == i)
    {
        return total;
    }

    summation(a, n, total + a[i], i + 1);
}

int main()
{
    int n;
    scanf("%d", &n);
    int a[n];

    for (int i = 0; i < n; i++)
    {
        scanf("%d", &a[i]);
    }

    long long int total = summation(a, n, 0, 0);
    printf("%lld", total);

    return 0;
}