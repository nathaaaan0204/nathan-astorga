import { Button } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";

export const CarouselTextButton = ({ variant, children, color }) => {
  return (
    <Button variant={variant} color={color} endIcon={<KeyboardArrowRight />}>
      {children}
      
    </Button>
  );
};
