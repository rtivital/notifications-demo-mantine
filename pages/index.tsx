import { Button } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';

export default function HomePage() {
  const notifications = useNotifications();
  return (
    <Button onClick={() => notifications.showNotification({ message: 'Hello' })}>
      Show notification
    </Button>
  );
}
