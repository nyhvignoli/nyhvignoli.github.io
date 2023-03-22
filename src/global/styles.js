import styled from 'styled-components'
import {
  Border,
  Breakpoints,
  Color,
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
  Shadow,
  Sizes,
  Spacing,
  theme,
  Transition
} from '../theme'

const { colors } = theme

/* Container */
export const BaseFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

/* Typography */
const headingCommon = `
  font-family: ${FontFamily.HEADING};
`

export const Title = styled.h1`
  ${headingCommon}
  font-size: ${FontSize.MOBILE.HEADING_1};
  line-height: ${LineHeight.MOBILE.HEADING_1};
  margin-bottom: ${Spacing.MOBILE.X_SMALL};

  @media (${Breakpoints.TABLET.REGULAR.MIN}) {
    margin-bottom: ${Spacing.TABLET.X_SMALL};
  }

  @media (${Breakpoints.DESKTOP.LARGE}) {
    font-size: ${FontSize.DESKTOP.HEADING_1};
    line-height: ${LineHeight.DESKTOP.HEADING_1};
    margin-bottom: ${Spacing.DESKTOP.X_SMALL};
  }
`

export const Heading2 = styled.h2`
  ${headingCommon}
  font-size: ${FontSize.MOBILE.HEADING_2};
  line-height: ${LineHeight.MOBILE.HEADING_2};
  margin-bottom: ${Spacing.MOBILE.HUGE};

  @media (${Breakpoints.TABLET.REGULAR.MIN}) {
    margin-bottom: ${Spacing.TABLET.HUGE};
  }

  @media (${Breakpoints.DESKTOP.LARGE}) {
    font-size: ${FontSize.DESKTOP.HEADING_2};
    line-height: ${LineHeight.DESKTOP.HEADING_2};
    margin-bottom: ${Spacing.DESKTOP.HUGE};
  }
`

const subheadCommon = `
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-family: ${FontFamily.SUBHEAD};
  text-align: center;
  color: ${Color.GREY_100};
  font-weight: ${FontWeight.MEDIUM};
`

export const Subhead = styled.h2`
  ${subheadCommon}
  font-size: ${FontSize.MOBILE.SUBHEAD_1};
  line-height: ${LineHeight.MOBILE.SUBHEAD_1};
  margin-bottom: ${Spacing.MOBILE.SMALL};

  @media (${Breakpoints.TABLET.REGULAR.MIN}) {
    margin-bottom: ${Spacing.TABLET.SMALL};
  }

  @media (${Breakpoints.DESKTOP.LARGE}) {
    font-size: ${FontSize.DESKTOP.SUBHEAD_1};
    line-height: ${LineHeight.DESKTOP.SUBHEAD_1};
    margin-bottom: ${Spacing.DESKTOP.SMALL};
  }
`

export const Subhead2 = styled.h3`
  ${subheadCommon}
  font-size: ${FontSize.MOBILE.SUBHEAD_2};
  line-height: ${LineHeight.MOBILE.SUBHEAD_2};

  @media (${Breakpoints.DESKTOP.LARGE}) {
    font-size: ${FontSize.DESKTOP.SUBHEAD_2};
    line-height: ${LineHeight.DESKTOP.SUBHEAD_2};
  }

  ${({ styles }) => styles}
`

const bodySmallStyles = `
  font-size: ${FontSize.DESKTOP.BODY_4};
  line-height: ${LineHeight.DESKTOP.BODY_4};

  @media (${Breakpoints.DESKTOP.LARGE}) {
    font-size: ${FontSize.DESKTOP.BODY_4};
    line-height: ${LineHeight.DESKTOP.BODY_4};
  }
`

export const Body = styled.span`
  font-size: ${FontSize.MOBILE.BODY_3};
  line-height: ${LineHeight.MOBILE.BODY_3};
  text-align: center;
  color: ${Color.GREY_100};

  @media (${Breakpoints.DESKTOP.LARGE}) {
    font-size: ${FontSize.DESKTOP.BODY_3};
    line-height: ${LineHeight.DESKTOP.BODY_3};
  }

  ${({ small }) => small && bodySmallStyles}
`

/* List */
export const StackList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding-inline-start: 0;
  gap: 1rem;
  align-self: self-start;

  ${({ small }) => small && `gap: 0.5rem;`}

  @media (max-width: 900px) {
    gap: 0.5rem;
  }
`

export const ListItem = styled.li`
  opacity: 0.8;
  border: 1px solid #fff;
  padding: 0.3rem 1rem;
  border-radius: 2rem;

  ${({ small }) =>
    small &&
    `
      font-size: 1rem;
      padding: 0.2rem 0.8rem ;
      border: 1px solid rgba(0, 67, 108, 0.64);
    `}

  @media (max-width: 800px) {
    font-size: 1rem;
    padding: 0.2rem 0.8rem;
  }
`

/* CTA */
const buttonCommon = `
  border: none;
  background-color: ${Color.JADE_GREEN_400};
  padding: ${Spacing.DESKTOP.TINY} ${Spacing.DESKTOP.REGULAR};
  border-radius: ${Border.RADIUS.REGULAR};
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  font-weight: ${FontWeight.SEMI_BOLD};
  min-width: ${Sizes.BUTTON.WIDTH.DESKTOP.REGULAR};
  cursor: pointer;
  transition: all ${Transition.DURATION.SUPER_FAST} ease;

  &:hover {
    opacity: 0.8;
    box-shadow: ${Shadow.GENERIC.LIGHT};
    transition: all ${Transition.DURATION.SUPER_FAST} ease;
  }

  @media (${Breakpoints.MOBILE.LARGE.MAX}) {
    width: 100%;
  }
`

export const PrimaryButton = styled.button`
  ${buttonCommon}
  outline: none;
`

export const ButtonLink = styled.a`
  ${buttonCommon}
  color: ${Color.GREY_900};
  text-decoration: none;
  text-align: center;
`

export const InlineLink = styled.a`
  color: ${Color.JADE_GREEN_300};
  transition: all ${Transition.DURATION.SUPER_FAST} ease;

  &:hover {
    text-decoration: none;
    opacity: 0.8;
    transition: all ${Transition.DURATION.SUPER_FAST} ease;
  }
`

/* TO BE DEPRACATED */
export const Anchor = styled.a`
  color: ${Color.JADE_GREEN_300};

  &:hover {
    text-decoration: none;
    opacity: 0.8;
  }

  @media (${Breakpoints.MOBILE.LARGE.MAX}) {
    width: 100%;
  }
`

export const StyledButton = styled.button`
  width: fit-content;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  box-shadow: 0px 1px 5px 1px #012940;
  border-radius: 2rem;
  min-width: 160px;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1rem;
  background-color: ${({ orange }) =>
    orange ? colors.lightOrange : colors.babyBlue};
  color: ${colors.white};
  transition: all 0.1s ease;
  width: 100%;

  &:focus {
    background-color: ${({ orange }) =>
      orange ? colors.deepOrange : colors.darkBlue};
  }

  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 6px 2px #012940;
    opacity: 0.8;
    transform: scale(1.02);
    transition: all 0.1s ease;
  }

  @media (max-width: 800px) {
    margin: auto;
    align-self: center;
  }
`
