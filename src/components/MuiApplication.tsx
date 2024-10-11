import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Grid,
  Box,
  Container,
} from "@mui/material";

// Define types for the form data
interface FormData {
  institution: string;
  address: string;
  website: string;
  contactPerson: string;
  telephone: string;
  fax: string;
  email: string;
  degree: { [key: string]: string }; // Mapping faculties to selected degrees
}

const degreeOptions = ["BTh", "MTH", "M.A.", "M.S.", "Other"];

const ApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    institution: "",
    address: "",
    website: "",
    contactPerson: "",
    telephone: "",
    fax: "",
    email: "",
    degree: {},
  });

  // Update type for the event to ChangeEvent<HTMLInputElement>
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Faculty type and selected degree type should be string
  const handleCheckboxChange = (faculty: string, degree: string) => {
    setFormData((prevState) => ({
      ...prevState,
      degree: {
        ...prevState.degree,
        [faculty]: degree,
      },
    }));
  };

  // Submit event should have type FormEvent<HTMLFormElement>
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container>
      <Box component="form" onSubmit={handleSubmit} sx={{ p: 2 }}>
        <Typography variant="h4" gutterBottom>
          Asian Theological Accreditation Application for Membership
        </Typography>

        <Grid container spacing={2}>
          {/* Institution Information */}
          <Grid item xs={12}>
            <TextField
              label="Institution Name"
              name="institution"
              fullWidth
              onChange={handleChange}
              value={formData.institution}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Mailing Address"
              name="address"
              fullWidth
              onChange={handleChange}
              value={formData.address}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Program Website"
              name="website"
              fullWidth
              onChange={handleChange}
              value={formData.website}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Accreditation Contact Person"
              name="contactPerson"
              fullWidth
              onChange={handleChange}
              value={formData.contactPerson}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Telephone"
              name="telephone"
              fullWidth
              onChange={handleChange}
              value={formData.telephone}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Fax"
              name="fax"
              fullWidth
              onChange={handleChange}
              value={formData.fax}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              fullWidth
              onChange={handleChange}
              value={formData.email}
            />
          </Grid>

          {/* Degree Selection */}
          <Grid item xs={12}>
            <Typography variant="h6">
              Program Areas for Accreditation:
            </Typography>
          </Grid>

          {[
            "Biblical Studies & Theology",
            "Pastoral Psychology & Counseling",
            "Christian Apologetics & Mission",
            "Christian Values & Ethics",
            "Philosophy & Religion",
            "Leadership & Administration",
            "Prophets and Prophetical Office",
          ].map((faculty, index) => (
            <Grid item xs={12} key={index}>
              <Typography>{faculty}</Typography>
              {degreeOptions.map((degree) => (
                <FormControlLabel
                  key={degree}
                  control={
                    <Checkbox
                      checked={formData.degree[faculty] === degree}
                      onChange={() => handleCheckboxChange(faculty, degree)}
                    />
                  }
                  label={degree}
                />
              ))}
            </Grid>
          ))}

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit Application
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ApplicationForm;
