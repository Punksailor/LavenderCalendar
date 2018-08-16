import re, datetime, calendar

calendar.setfirstweekday(6)

import sys
firstday = sys.argv[1]
if firstday == "6":
 calendar.setfirstweekday(6)

year = ['January',
'February',
'March',
'April',
'May',
'June',
'July',
'August',
'September',
'October',
'November',
'December']

def main():
 today = datetime.datetime.date(datetime.datetime.now())

current = re.split('-', str(today))
current_no = int(current[1])
current_month = year[current_no-1]
current_day = int(re.sub('\A0', '', current[2]))
current_yr = int(current[0])

month = calendar.monthcalendar(current_yr, current_no)
nweeks = len(month)

 for w in range(0,nweeks):
week = month[w]
print ""
for x in xrange(0,7):
day = week[x]
if x == 5 or x == 6:
classtype = 'weekend'
else:
classtype = 'day'
if day == 0:
classtype = 'previous'
print '' %(classtype)
elif day == current_day:
print '%s

 if __name__ == "__main__":
main()
