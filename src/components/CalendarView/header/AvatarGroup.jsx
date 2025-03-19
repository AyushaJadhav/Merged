import React from 'react';
import { Persona as Avatar, Stack, ActionButton } from "@fluentui/react";
import { PersonAddFilled } from "@fluentui/react-icons";
import { useCalendarStyles } from '../CalendarStyles';

const AvatarGroupComponent = ({ users = [] }) => {
  const styles = useCalendarStyles();

  return (
    <div className={styles.headerLeft}>
      <Stack horizontal tokens={{ childrenGap: 8 }} className={styles.avatarGroup}>
        {users.slice(0, 4).map((user) => (
          <Avatar
            key={user.id}
            text={user.name}
            imageUrl={user.profilePic}
            size={32}
            className={styles.customAvatar}
          />
        ))}
        {users.length > 4 && (
          <div className={styles.overflowAvatar}>+{users.length - 4}</div>
        )}
      </Stack>

      <ActionButton
        iconProps={{ iconName: "AddFriend" }}
        className={styles.addPersonButton}
        aria-label="Add person"
      />
    </div>
  );
};

export default AvatarGroupComponent;
