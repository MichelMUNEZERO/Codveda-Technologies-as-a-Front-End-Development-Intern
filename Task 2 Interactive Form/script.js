// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Get form elements
  const form = document.getElementById("reservationForm");
  const page1 = document.getElementById("page1");
  const page2 = document.getElementById("page2");
  const nextBtn = document.getElementById("nextBtn");
  const backBtn = document.getElementById("backBtn");
  const submitBtn = document.getElementById("submitBtn");
  const successModal = document.getElementById("successModal");
  const closeModal = document.getElementById("closeModal");
  const summaryContainer = document.getElementById("summaryContainer");
  const dragArea = document.querySelector(".drag-area");

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
    phone: {
      validate: (value) => {
        if (!value.trim()) return "Phone number is required";
        const phoneRegex = /^[\d\s\-\(\)]+$/;
        if (!phoneRegex.test(value)) return "Please enter a valid phone number";
        const digits = value.replace(/\D/g, "");
        if (digits.length < 10)
          return "Phone number must be at least 10 digits";
        return "";
      },
    },
    visitDate: {
      validate: (value) => {
        if (!value) return "Visit date is required";
        const selectedDate = new Date(value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate < today) return "Visit date cannot be in the past";
        return "";
      },
    },
    groupSize: {
      validate: (value) => {
        if (!value) return "Group size is required";
        const num = parseInt(value);
        if (isNaN(num) || num < 1) return "Group size must be at least 1";
        if (num > 100) return "Group size cannot exceed 100";
        return "";
      },
    },
  };

  // Initialize form
  initializeForm();

  function initializeForm() {
    // Set default date to today
    const today = new Date().toISOString().split("T")[0];
    document.getElementById("visitDate").value = today;

    // Add event listeners to all input fields
    addInputListeners();

    // Add phone format listener
    addPhoneFormatter();

    // Add contact method listener
    addContactMethodListener();

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
      "phone",
      "visitDate",
      "groupSize",
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

    // Textareas
    const textareas = ["additionalInfo", "referralSource"];
    textareas.forEach((textareaId) => {
      const textarea = document.getElementById(textareaId);
      if (textarea) {
        textarea.addEventListener("focus", function () {
          this.parentElement.classList.add("focused");
        });

        textarea.addEventListener("blur", function () {
          this.parentElement.classList.remove("focused");
        });
      }
    });
  }

  function addPhoneFormatter() {
    const phoneInput = document.getElementById("phone");
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

  function addContactMethodListener() {
    const contactCheckboxes = document.querySelectorAll(
      'input[name="contact"]',
    );
    const callbackGroup = document.getElementById("callbackGroup");
    const contactPhone = document.getElementById("contactPhone");

    contactCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        // Show callback time if phone is selected
        if (
          contactPhone.checked ||
          document.querySelector('input[name="contact"][value="either"]')
            .checked
        ) {
          callbackGroup.style.display = "block";
        } else {
          callbackGroup.style.display = "none";
        }
      });
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
      "phone",
      "visitDate",
      "groupSize",
    ];
    requiredInputs.forEach((inputId) => {
      const input = document.getElementById(inputId);
      if (input && !validateField(input)) {
        isValid = false;
      }
    });

    // Validate at least one tour selected
    const toursChecked = document.querySelectorAll(
      'input[name="tours"]:checked',
    ).length;
    const toursGroup = document
      .querySelector('input[name="tours"]')
      .closest(".form-group");
    const toursError = toursGroup.querySelector(".error-message");

    if (toursChecked === 0) {
      toursError.textContent = "Please select at least one tour";
      toursError.classList.add("show");
      isValid = false;
    } else {
      toursError.classList.remove("show");
    }

    // Validate at least one contact method selected
    const contactChecked = document.querySelectorAll(
      'input[name="contact"]:checked',
    ).length;
    const contactGroup = document
      .querySelector('input[name="contact"]')
      .closest(".form-group");
    const contactError = contactGroup.querySelector(".error-message");

    if (contactChecked === 0) {
      contactError.textContent = "Please select at least one contact method";
      contactError.classList.add("show");
      isValid = false;
    } else {
      contactError.classList.remove("show");
    }

    // Validate callback time if phone is selected
    const contactPhone = document.getElementById("contactPhone");
    const contactEither = document.querySelector(
      'input[name="contact"][value="either"]',
    );
    if (contactPhone.checked || contactEither.checked) {
      const callbackChecked = document.querySelector(
        'input[name="callbackTime"]:checked',
      );
      const callbackGroup = document.getElementById("callbackGroup");
      const callbackError = callbackGroup.querySelector(".error-message");

      if (!callbackChecked) {
        callbackError.textContent = "Please select a callback time";
        callbackError.classList.add("show");
        isValid = false;
      } else {
        callbackError.classList.remove("show");
      }
    }

    return isValid;
  }

  function collectFormData() {
    formData = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      visitDate: document.getElementById("visitDate").value,
      groupSize: document.getElementById("groupSize").value,
      tours: Array.from(
        document.querySelectorAll('input[name="tours"]:checked'),
      ).map((cb) => cb.nextElementSibling.textContent),
      contactMethods: Array.from(
        document.querySelectorAll('input[name="contact"]:checked'),
      ).map((cb) => cb.nextElementSibling.textContent),
      callbackTime:
        document.querySelector('input[name="callbackTime"]:checked')
          ?.nextElementSibling?.textContent || "N/A",
      additionalInfo: document.getElementById("additionalInfo").value || "None",
      referralSource:
        document.getElementById("referralSource").value || "Not specified",
    };
  }

  function displaySummary() {
    const summaryContent = document.getElementById("summaryContent");

    const date = new Date(formData.visitDate);
    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

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
                <div class="summary-label">Phone Number</div>
                <div class="summary-value">${formData.phone}</div>
            </div>
            <div class="summary-item">
                <div class="summary-label">Visit Date</div>
                <div class="summary-value">${formattedDate}</div>
            </div>
            <div class="summary-item">
                <div class="summary-label">Group Size</div>
                <div class="summary-value">${formData.groupSize} ${parseInt(formData.groupSize) === 1 ? "person" : "people"}</div>
            </div>
            <div class="summary-item">
                <div class="summary-label">Selected Tours</div>
                <div class="summary-value">${formData.tours.join(", ")}</div>
            </div>
            <div class="summary-item">
                <div class="summary-label">Contact Method</div>
                <div class="summary-value">${formData.contactMethods.join(", ")}</div>
            </div>
            <div class="summary-item">
                <div class="summary-label">Callback Time</div>
                <div class="summary-value">${formData.callbackTime}</div>
            </div>
            <div class="summary-item">
                <div class="summary-label">Additional Information</div>
                <div class="summary-value">${formData.additionalInfo}</div>
            </div>
            <div class="summary-item">
                <div class="summary-label">How did you hear about us?</div>
                <div class="summary-value">${formData.referralSource}</div>
            </div>
        `;

    dragArea.style.display = "none";
    summaryContainer.style.display = "block";
  }

  function handleNext() {
    if (validateRequiredFields()) {
      collectFormData();
      displaySummary();

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

      // Reset date to today
      const today = new Date().toISOString().split("T")[0];
      document.getElementById("visitDate").value = today;

      // Hide callback group
      document.getElementById("callbackGroup").style.display = "none";

      // Reset summary
      dragArea.style.display = "flex";
      summaryContainer.style.display = "none";

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

  // Real-time character count for textareas (optional enhancement)
  const textareas = document.querySelectorAll("textarea");
  textareas.forEach((textarea) => {
    textarea.addEventListener("input", function () {
      // Could add character count here if needed
    });
  });

  // Prevent form submission on Enter key (except in textareas)
  form.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && e.target.tagName !== "TEXTAREA") {
      e.preventDefault();
    }
  });
});
