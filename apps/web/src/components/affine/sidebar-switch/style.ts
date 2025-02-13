import { IconButton, styled } from '@affine/component';

export const StyledSidebarSwitch = styled(IconButton, {
  shouldForwardProp(propName: PropertyKey) {
    return propName !== 'visible';
  },
})<{ visible: boolean }>(({ visible }) => {
  return {
    opacity: visible ? 1 : 0,
    WebkitAppRegion: visible ? 'no-drag' : 'drag',
    transition: 'all 0.2s ease-in-out',
  };
});
