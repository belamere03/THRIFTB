#!/usr/bin/env python3
"""
Backend Test for EcoMarket Website
Since this is a static HTML/CSS/JS website, we'll test the HTTP server functionality.
"""

import requests
import sys
from datetime import datetime

class EcoMarketTester:
    def __init__(self, base_url="http://localhost:8000"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, test_func):
        """Run a single test"""
        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            success = test_func()
            if success:
                self.tests_passed += 1
                print(f"✅ Passed")
            else:
                print(f"❌ Failed")
            return success
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False

    def test_homepage_accessibility(self):
        """Test if homepage is accessible"""
        response = requests.get(self.base_url, timeout=10)
        return response.status_code == 200 and "EcoMarket" in response.text

    def test_static_assets(self):
        """Test if static assets are accessible"""
        assets = [
            "/styles.css",
            "/script.js",
            "/Untitled design (1).png"
        ]
        
        for asset in assets:
            response = requests.get(f"{self.base_url}{asset}", timeout=10)
            if response.status_code != 200:
                print(f"❌ Asset {asset} not accessible")
                return False
            print(f"✅ Asset {asset} accessible")
        return True

    def test_page_content(self):
        """Test if page contains expected content"""
        response = requests.get(self.base_url, timeout=10)
        content = response.text
        
        required_elements = [
            "Our Mission",
            "Featured Items",
            "Special Offers",
            "Top Contributors",
            "Donate Materials"
        ]
        
        for element in required_elements:
            if element not in content:
                print(f"❌ Missing section: {element}")
                return False
            print(f"✅ Found section: {element}")
        return True

    def test_stat_boxes_html(self):
        """Test if stat boxes are present in HTML"""
        response = requests.get(self.base_url, timeout=10)
        content = response.text
        
        # Check for stat boxes structure
        stat_indicators = [
            'data-target="10000"',
            'data-target="100000"', 
            'data-target="2500"',
            'data-target="800"'
        ]
        
        for indicator in stat_indicators:
            if indicator not in content:
                print(f"❌ Missing stat indicator: {indicator}")
                return False
            print(f"✅ Found stat indicator: {indicator}")
        return True

    def test_featured_items_structure(self):
        """Test if featured items section structure exists"""
        response = requests.get(self.base_url, timeout=10)
        content = response.text
        
        # Check for featured items structure
        required_structure = [
            'id="itemsGrid"',
            'class="items-grid"',
            'href="shop.html"',
            'Shop All'
        ]
        
        for structure in required_structure:
            if structure not in content:
                print(f"❌ Missing structure: {structure}")
                return False
            print(f"✅ Found structure: {structure}")
        return True

def main():
    print("=" * 50)
    print("🧪 ECOMARKET BACKEND/SERVER TESTING")
    print("=" * 50)
    
    # Setup
    tester = EcoMarketTester()
    
    # Run tests
    tester.run_test("Homepage Accessibility", tester.test_homepage_accessibility)
    tester.run_test("Static Assets Loading", tester.test_static_assets)
    tester.run_test("Page Content Sections", tester.test_page_content)
    tester.run_test("Stat Boxes HTML Structure", tester.test_stat_boxes_html)
    tester.run_test("Featured Items Structure", tester.test_featured_items_structure)
    
    # Print results
    print("\n" + "=" * 50)
    print(f"📊 RESULTS: {tester.tests_passed}/{tester.tests_run} tests passed")
    print("=" * 50)
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All backend/server tests PASSED!")
        return 0
    else:
        print("⚠️  Some backend/server tests FAILED!")
        return 1

if __name__ == "__main__":
    sys.exit(main())