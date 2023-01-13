import { Card, Image, Text, Group, RingProgress } from "@mantine/core";
import { useGalleryCardStyles } from "./styles";

interface GalleryCardProps {
  image: string;
  title: string;
  description: string;
  stats: {
    title: string;
    value: string;
  }[];
}

export function GalleryCard({
  image,
  title,
  description,
  stats,
}: GalleryCardProps) {
  const { classes } = useGalleryCardStyles();

  const items = stats.map((stat) => (
    <div key={stat.title}>
      <Text size="xs" color="dimmed">
        {stat.title}
      </Text>
      <Text weight={500} size="sm">
        {stat.value}
      </Text>
    </div>
  ));

  return (
    <Card withBorder p="lg" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={100} />
      </Card.Section>

      <Group position="apart" mt="xl">
        <Text size="sm" weight={700} className={classes.title}>
          {title}
        </Text>
        <Group spacing={5}>
          <Text size="xs" color="dimmed">
            80% completed
          </Text>
          <RingProgress size={18} sections={[{ value: 80, color: "blue" }]} />
        </Group>
      </Group>
      <Text mt="sm" mb="md" color="dimmed" size="xs">
        {description}
      </Text>
      <Card.Section className={classes.footer}>{items}</Card.Section>
    </Card>
  );
}
