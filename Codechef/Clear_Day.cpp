// https://www.codechef.com/problems/CLEARDAY

#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(NULL);

    int x, y;
    cin >> x >> y;

    int ans = 7 - x - y;
    cout << ans;

    return 0;
}