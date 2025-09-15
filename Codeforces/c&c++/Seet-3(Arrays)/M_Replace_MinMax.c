// link: https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/M

#include <stdio.h>
int main()
{
    int n;
    scanf("%d", &n);

    int arr[n];
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }

    int min = arr[0];
    int max = arr[0];
    int minIdx = 0;
    int maxIdx = 0;

    for (int i = 0; i < n; i++)
    {
        if (min > arr[i])
        {
            min = arr[i];
            minIdx = i;
        }

        if (arr[i] > max)
        {
            max = arr[i];
            maxIdx = i;
        }
    }

    arr[minIdx] = max;
    arr[maxIdx] = min;

    for (int i = 0; i < n; i++)
    {
        printf("%d ", arr[i]);
    }

    return 0;
}