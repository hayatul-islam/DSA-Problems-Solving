// link: https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/J
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

    int minVal = arr[0];
    int minCount = 0;
    for (int i = 0; i < n; i++)
    {
        if (minVal > arr[i])
        {
            minVal = arr[i];
        }
    }

    for (int i = 0; i < n; i++)
    {
        if (minVal == arr[i])
        {
            minCount++;
        }
    }

    if (minCount % 2 == 1)
    {
        printf("Lucky");
    }
    else
    {
        printf("Unlucky");
    }

    return 0;
}