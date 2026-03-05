// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Get form elements
  const form = document.getElementById("contactForm");
  const page1 = document.getElementById("page1");
  const page2 = document.getElementById("page2");
  const nextBtn = document.getElementById("nextBtn");
  const backBtn = document.getElementById("backBtn");
  const submitBtn = document.getElementById("submitBtn");
  const successModal = document.getElementById("successModal");
  const closeModal = document.getElementById("closeModal");
  const summaryContainer = document.getElementById("summaryContainer");
  const progressDots = document.querySelectorAll(".dot");

  // Form data storage
  let formData = {};

  // Validation rules
  const validators = {
    firstName: {
      validate: (value) => {
        if (!value.trim()) return "First name is required";
        if (value.trim().length < 2)
          return "First name must be at least 2 characters";
        if (!/^[a-zA-Z\s'-]+$/.test(value))
          return "First name can only contain letters";
        return "";
      },
    },
    lastName: {
      validate: (value) => {
        if (!value.trim()) return "Last name is required";
        if (value.trim().length < 2)
          return "Last name must be at least 2 characters";
        if (!/^[a-zA-Z\s'-]+$/.test(value))
          return "Last name can only contain letters";
        return "";
      },
    },
    email: {
      validate: (value) => {
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value))
          return "Please enter a valid email address";
        return "";
      },
    },
    whatsapp: {
      validate: (value) => {
        if (!value.trim()) return "WhatsApp number is required";
        const phoneRegex = /^[\d\s\-\(\)+]+$/;
        if (!phoneRegex.test(value))
          return "Please enter a valid WhatsApp number";
        const digits = value.replace(/\D/g, "");
        if (digits.length < 10)
          return "WhatsApp number must be at least 10 digits";
        return "";
      },
    },
    callPhone: {
      validate: (value) => {
        if (!value.trim()) return "Call phone is required";
        const phoneRegex = /^[\d\s\-\(\)+]+$/;
        if (!phoneRegex.test(value)) return "Please enter a valid phone number";
        const digits = value.replace(/\D/g, "");
        if (digits.length < 10)
          return "Phone number must be at least 10 digits";
        return "";
      },
    },
    city: {
      validate: (value) => {
        if (!value.trim()) return "City is required";
        if (value.trim().length < 2)
          return "City must be at least 2 characters";
        return "";
      },
    },
    address: {
      validate: (value) => {
        if (!value.trim()) return "Address is required";
        if (value.trim().length < 5)
          return "Address must be at least 5 characters";
        return "";
      },
    },
    state: {
      validate: (value) => {
        if (!value.trim()) return "State is required";
        return "";
      },
    },
    zipCode: {
      validate: (value) => {
        if (!value.trim()) return "Zip code is required";
      },
    },
  };

  // Initialize form
  initializeForm();

  function initializeForm() {
    // Add event listeners to all input fields
    addInputListeners();

    // Add phone format listener
    addPhoneFormatters();

    // Navigation button listeners
    nextBtn.addEventListener("click", handleNext);
    backBtn.addEventListener("click", handleBack);
    submitBtn.addEventListener("click", handleSubmit);
    closeModal.addEventListener("click", closeSuccessModal);
  }

  function addInputListeners() {
    // Text inputs
    const textInputs = [
      "firstName",
      "lastName",
      "email",
      "whatsapp",
      "callPhone",
      "city",
      "address",
      "extraField",
      "state",
      "zipCode",
    ];

    textInputs.forEach((inputId) => {
      const input = document.getElementById(inputId);
      if (input) {
        // Focus event
        input.addEventListener("focus", function () {
          this.parentElement.classList.add("focused");
          clearError(this);
        });

        // Blur event - validate
        input.addEventListener("blur", function () {
          this.parentElement.classList.remove("focused");
          validateField(this);
        });

        // Input event - real-time validation
        input.addEventListener("input", function () {
          if (this.classList.contains("error")) {
            validateField(this);
          }
        });
      }
    });
  }

  function addPhoneFormatters() {
    const phoneInputs = ["whatsapp", "callPhone"];
    phoneInputs.forEach((inputId) => {
      const phoneInput = document.getElementById(inputId);
      if (phoneInput) {
        phoneInput.addEventListener("input", function (e) {
          let value = e.target.value.replace(/\D/g, "");
          let formattedValue = "";

          if (value.length > 0) {
            formattedValue = "(" + value.substring(0, 3);
          }
          if (value.length >= 4) {
            formattedValue += ") " + value.substring(3, 6);
          }
          if (value.length >= 7) {
            formattedValue += "-" + value.substring(6, 10);
          }

          e.target.value = formattedValue;
        });
      }
    });
  }
  function validateField(input) {
    const fieldName = input.id || input.name;
    const value = input.value;
    const validator = validators[fieldName];

    if (validator) {
      const errorMsg = validator.validate(value);
      if (errorMsg) {
        showError(input, errorMsg);
        return false;
      } else {
        clearError(input);
        input.classList.add("valid");
        return true;
      }
    }

    return true;
  }

  function showError(input, message) {
    input.classList.add("error");
    input.classList.remove("valid");

    const errorElement = input.parentElement.querySelector(".error-message");
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.classList.add("show");
    }
  }

  function clearError(input) {
    input.classList.remove("error");

    const errorElement = input.parentElement.querySelector(".error-message");
    if (errorElement) {
      errorElement.textContent = "";
      errorElement.classList.remove("show");
    }
  }

  function validateRequiredFields() {
    let isValid = true;

    // Validate text inputs
    const requiredInputs = [
      "firstName",
      "lastName",
      "email",
      "whatsapp",
      "callPhone",
      "city",
      "address",
      "state",
      "zipCode",
    ];
    requiredInputs.forEach((inputId) => {
      const input = document.getElementById(inputId);
      if (input && !validateField(input)) {
        isValid = false;
      }
    });

    // Validate at least one contact method selected
    const contactChecked = document.querySelectorAll(
      'input[name="contactMethod"]:checked',
    ).length;
    const contactGroup = document
      .querySelector('input[name="contactMethod"]')
      .closest(".form-group");
    const contactError = contactGroup.querySelector(".error-message");

    if (contactChecked === 0) {
      contactError.textContent = "Please select at least one contact method";
      contactError.classList.add("show");
      isValid = false;
    } else {
      contactError.classList.remove("show");
    }

    return isValid;
  }

  function collectFormData() {
    formData = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      whatsapp: document.getElementById("whatsapp").value,
      callPhone: document.getElementById("callPhone").value,
      city: document.getElementById("city").value,
      address: document.getElementById("address").value,
      extraField: document.getElementById("extraField")?.value || "N/A",
      state: document.getElementById("state").value,
      zipCode: document.getElementById("zipCode").value,
      contactMethods: Array.from(
        document.querySelectorAll('input[name="contactMethod"]:checked'),
      ).map((cb) => cb.nextElementSibling.textContent),
    };
  }

  function displaySummary() {
    const summaryContent = document.getElementById("summaryContent");

    summaryContent.innerHTML = `
            <div class="summary-item">
                <div class="summary-label">Full Name</div>
                <div class="summary-value">${formData.firstName} ${formData.lastName}</div>
            </div>
            <div class="summary-item">
                <div class="summary-label">Email</div>
                <div class="summary-value">${formData.email}</div>
            </div>
            <div class="summary-item">
                <div class="summary-label">WhatsApp Number</div>
                <div class="summary-value">${formData.whatsapp}</div>
            </div>
            <div class="summary-item">
                <div class="summary-label">Call Phone</div>
                <div class="summary-value">${formData.callPhone}</div>
            </div>
            <div class="summary-item">
                <div class="summary-label">City</div>
                <div class="summary-value">${formData.city}</div>
            </div>
            <div class="summary-item">
                <div class="summary-label">Address</div>
                <div class="summary-value">${formData.address}</div>
            </div>
            <div class="summary-item">
                <div class="summary-label">State</div>
                <div class="summary-value">${formData.state}</div>
            </div>
            <div class="summary-item">
                <div class="summary-label">Zip Code</div>
                <div class="summary-value">${formData.zipCode}</div>
            </div>
            <div class="summary-item">
                <div class="summary-label">Contact Methods</div>
                <div class="summary-value">${formData.contactMethods.join(", ")}</div>
            </div>
        `;
  }

  function handleNext() {
    if (validateRequiredFields()) {
      collectFormData();
      displaySummary();

      // Update progress dots
      progressDots[0].classList.remove("active");
      progressDots[0].classList.add("completed");
      progressDots[1].classList.add("active");

      // Switch pages
      page1.classList.remove("active");
      page2.classList.add("active");

      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Scroll to first error
      const firstError = document.querySelector(".error");
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
        firstError.focus();
      }
    }
  }

  function handleBack() {
    // Update progress dots
    progressDots[1].classList.remove("active");
    progressDots[0].classList.remove("completed");
    progressDots[0].classList.add("active");

    page2.classList.remove("active");
    page1.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleSubmit() {
    // Add loading state
    submitBtn.classList.add("loading");
    submitBtn.disabled = true;

    // Simulate submission delay
    setTimeout(() => {
      submitBtn.classList.remove("loading");
      submitBtn.disabled = false;

      // Update progress dots
      progressDots[1].classList.remove("active");
      progressDots[1].classList.add("completed");
      progressDots[2].classList.add("active");

      // Show success modal
      successModal.classList.add("show");

      // Log form data (in real app, this would be sent to server)
      console.log("Form submitted with data:", formData);
    }, 1500);
  }

  function closeSuccessModal() {
    successModal.classList.remove("show");

    // Reset form and return to page 1
    setTimeout(() => {
      form.reset();
      page2.classList.remove("active");
      page1.classList.add("active");

      // Reset validation classes
      document.querySelectorAll(".valid, .error").forEach((el) => {
        el.classList.remove("valid", "error");
      });

      // Reset progress dots
      progressDots.forEach((dot) => {
        dot.classList.remove("active", "completed");
      });
      progressDots[0].classList.add("active");

      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  }

  // Keyboard shortcuts
  document.addEventListener("keydown", function (e) {
    // ESC to close modal
    if (e.key === "Escape" && successModal.classList.contains("show")) {
      closeSuccessModal();
    }
  });

  // Prevent form submission on Enter key
  form.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  });
});
