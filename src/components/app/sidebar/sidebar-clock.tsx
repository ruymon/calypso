'use client';

import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';

interface UTCTime {
  abbreviation: string
  client_ip: string
  datetime: string
  day_of_week: number
  day_of_year: number
  dst: boolean
  dst_from?: string
  dst_offset: number
  dst_until: any
  raw_offset: number
  timezone: string
  unixtime: number
  utc_datetime: string
  utc_offset: string
  week_number: number
}

const UTC_TIME_REFRESH_INTERVAL_IN_MS = 1000; // 1 second
const UTC_TIME_API_URL = 'https://worldtimeapi.org/api/timezone/Etc/UTC';

async function getUTCTime(): Promise<UTCTime | null> {
  const response = await fetch(UTC_TIME_API_URL);
  const data = await response.json();
  return data;
}

export function SidebarClock() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['live-clock'],
    queryFn: getUTCTime,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    refetchInterval: UTC_TIME_REFRESH_INTERVAL_IN_MS,
  })

  if (error) console.error(error);
  if (!data) return null;

  const formattedTime = format(new Date(data.utc_datetime), 'HH:mm');

  if (isLoading) {
    return (
      <footer className="flex flex-col text-xs items-center">
        <time>...</time>
        <span>ZULU</span>
      </footer>
    );
  }

  return (
    <footer className="flex flex-col text-xs items-center">
      <time>{formattedTime}</time>
      <span>ZULU</span>
    </footer>
  );
}
