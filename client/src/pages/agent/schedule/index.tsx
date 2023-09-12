import { DefaultLayout } from "@/components/DefaultLayout";
import { DeliveryScheduleList } from "@/components/DeliveryScheduleList";
import { DeliveryShiftList } from "@/components/DeliveryShiftList";
import { UserCountList } from "@/components/UserCountList";
import { Box, Button, Grid, Typography } from "@mui/material";

export default function agentSchedulePage() {
  return (
    <DefaultLayout>
      <Box
        height="80%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="20px"
        paddingTop="50px"
      >
        <UserCountList />

        <Box
          height="100%"
          width="100%"
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          alignItems="center"
        >
          <Box width="50%">
            <DeliveryScheduleList />
          </Box>
          <Box width="50%">
            <DeliveryShiftList />
          </Box>
        </Box>
      </Box>
      <Button
        size="small"
        variant="outlined"
        style={{
          borderColor: "black",
          background: "#014A8F",
        }}
        sx={{
          color: "white",
          marginTop: "10px",
          marginX: "10px",
          width: "160px",
          fontSize: "20px",
        }}
      >
        シフト追加
      </Button>
    </DefaultLayout>
  );
}
